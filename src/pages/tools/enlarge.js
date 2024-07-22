import React from "react";
import "../style.css";
/* eslint-disable react/prop-types */
/* eslint react/prop-types: 0 */
const ImageEnlarge = ({ src, alt }) => {
  return (
    <div className="image-container">
      <img src={src} alt={alt} />
    </div>
  );
};

export default ImageEnlarge;
