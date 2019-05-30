import React from "react";

const ImageArea = ({ imageUrl, celebName, showName }) => {
  return (
    <div>
      <img src={imageUrl} alt="" width="500px" height="500px" />
      {showName ? <p>I guess it would be: {celebName.name}</p> : null}
    </div>
  );
};

export default ImageArea;
