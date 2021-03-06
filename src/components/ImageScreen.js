import React, { useState, useEffect } from "react";
import Resizer from "react-image-file-resizer";
import { objDetect } from "../api/axios";
import CropImg from "./CropImg";
import { Progress } from "semantic-ui-react";
import { useToasts } from "react-toast-notifications";
import "../Scss/ImageScreen.scss";

const ImageScreen = () => {
  const [pic, setPic] = useState("");
  const [result, setResult] = useState("");
  const { addToast } = useToasts();
  let displayCrop;
  let displayTableData;

  const init = () => {
    setPic("");
    setResult("");
    displayCrop = "";
    displayTableData = "";
  };

  const resizeFile = (file) =>
    new Promise((resolve) => {
      Resizer.imageFileResizer(
        file,
        500,
        500,
        "JPEG",
        100,
        0,
        (uri) => {
          resolve(uri);
        },
        "base64"
      );
    });

  const data = {
    raw_data: pic.replace("data:image/jpeg;base64,", ""),
    configurations: [
      {
        parameter: "OutputCroppedImage",
        value: "false",
      },
      {
        parameter: "ConfidenceThreshold",
        value: "0.1",
      },
    ],
  };

  const fetching = () => {
    objDetect
      .post("/object-detection", data)
      .then((res) => setResult(res))
      .catch((error) => console.error(error.message, "💥💥💥 "));
  };

  useEffect(() => {
    fetching();
  }, [pic]);

  const loadFile = async (ev) => {
    init();
    try {
      const file = ev.target.files[0];
      const image = await resizeFile(file);
      setPic(image);
      addToast("Upload completed", {
        appearance: "success",
        autoDismiss: true,
      });
    } catch (err) {
      addToast(err.message, {
        appearance: "error",
        autoDismiss: true,
      });
    }
  };

  if (result.data) {
    const { detected_objects } = result.data;

    try {
      displayCrop = detected_objects.map((item, index) => {
        return (
          <CropImg
            key={index}
            left={item.bounding_box.left}
            top={item.bounding_box.top}
            bottom={item.bounding_box.bottom}
            right={item.bounding_box.right}
            label={item.name}
            parent={item.parent}
          />
        );
      });

      displayTableData = detected_objects.map((item, index) => {
        return (
          <tr key={index}>
            <td width="100">
              <h4 className="ui image header">
                <div className="content">
                  {item.name.toUpperCase()}
                  <div className="sub header">{item.parent}</div>
                </div>
              </h4>
            </td>
            <td width="300">
              <Progress
                percent={(item.confidence * 100).toFixed(2)}
                indicating
                size="medium"
                progress
              />
            </td>
          </tr>
        );
      });
    } catch (err) {
      displayTableData = (
        <h4 style={{ color: "red" }}>
          CAN NOT DETECT ANY OBJECT <br /> <br /> PLEASE TRY ANOTHER ONE!
        </h4>
      );
    }
  }

  const displayTable = (
    <table className="ui very basic collapsing celled table segment">
      <thead>
        <tr>
          <th>DETECT</th>
          <th>CONFIDENCE</th>
        </tr>
      </thead>
      <tbody>{displayTableData}</tbody>
    </table>
  );

  return (
    <div className="image--container">
      <label className="image--label">
        <input type="file" accept="image/*" onChange={loadFile} />
        <i className="upload icon large" /> Select your image
      </label>
      <div className="image--result">
        <div>
          {pic.length ? (
            <img src={pic} alt="pic" id="display--image" />
          ) : (
            <img src="/images/Black_screen.PNG" alt="pic" id="display--image" />
          )}
          {displayCrop}
        </div>
        <div className="image--table">{pic.length ? displayTable : ""}</div>
      </div>
    </div>
  );
};

export default ImageScreen;
