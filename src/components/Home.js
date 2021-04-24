import React, { useState } from "react";
import { objDetect } from "../api/axios";
import CropImg from "./CropImg";

const Home = () => {
  const reader = new FileReader();
  const [result, setResult] = useState("");
  const [readerData, setReaderData] = useState("");
  let displayCrop;

  const data = {
    raw_data: readerData,
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

  const fetching = async () => {
    await objDetect
      .post("/object-detection", data)
      .then((res) => {
        setResult(res);
      })
      .catch((error) => console.log(error.message, "💥💥💥 "));
  };

  if (!result.status) {
    console.log("on fetching");
    fetching();
  }

  console.log(result.data);

  if (result.data) {
    const { detected_objects } = result.data;
    displayCrop = detected_objects.map((item) => {
      return (
        <CropImg
          left={item.bounding_box.left}
          top={item.bounding_box.top}
          bottom={item.bounding_box.bottom}
          right={item.bounding_box.right}
          label={item.name}
          parent={item.parent}
        />
      );
    });
  }

  const readFile = (ev) => {
    reader.readAsBinaryString(ev.target.files[0]);
    reader.onload = function () {
      setReaderData(btoa(reader.result));
    };
    reader.onerror = function () {
      console.log("there are some problems");
    };
  };

  return (
    <div className="home">
      <input type="file" onChange={readFile} accept="image/*" name="image" />
      <div className="home--image">
        {data.raw_data ? (
          <img alt="img" src={`data:image/jpeg;base64,${data.raw_data}`} />
        ) : (
          ""
        )}
        {displayCrop}
      </div>
    </div>
  );
};

export default Home;
