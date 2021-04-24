import React from "react";

const CropImg = ({ left, top, bottom, right, label, parent }) => {
  let colorType = "blue";
  if (parent === "furniture") colorType = "green";
  if (parent === "animal") colorType = "red";
  if (parent === "electronic") colorType = "yellow";
  if (parent === "vehicle") colorType = "greenyellow";
  if (parent === "food") colorType = "aquamarine";

  const myStyle = {
    position: "absolute",
    height: `${bottom - top}px`,
    width: `${right - left}px`,
    left: `${left}px`,
    top: `${top}px`,
    border: `3px solid ${colorType}`,
    fontSize: "20px",
    color: colorType,
  };

  return (
    <div>
      <div style={myStyle}>
        <h1>{label}</h1>
      </div>
    </div>
  );
};

export default CropImg;
