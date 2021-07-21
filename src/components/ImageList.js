import React from "react";
import "./ImageList.css"
import ImageCard from "./ImageCard";

const ImageList = (props) => {
  console.log(props.images); // we have to make a map statement to iterate the list
  const images = props.images.map((image) => {
    return <ImageCard  key={image.id} image={image} />;
  });
  return <div className="image-list">{images}</div>;
};

export default ImageList;

