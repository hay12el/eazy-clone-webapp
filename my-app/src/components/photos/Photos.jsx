import React from "react";
import "./photos.css";
import { Carousel } from "react-carousel-minimal";

function Photos(props) {
  const data = props.photos.map((x) => ({ image: x }));

  const captionStyle = {
    fontSize: "2em",
    fontWeight: "bold",
    display: "none",
  };
  const slideNumberStyle = {
    fontSize: "20px",
    fontWeight: "bold",
  };

  return (
    <div className="App">
      <Carousel
        data={data}
        width="500px"
        height="300px"
        captionStyle={captionStyle}
        radius="5px"
        slideNumber={true}
        slideNumberStyle={slideNumberStyle}
        captionPosition="top"
        automatic={false}
        dots={true}
        pauseIconColor="white"
        pauseIconSize="40px"
        slideBackgroundColor="darkgrey"
        slideImageFit="cover"
        thumbnails={true}
        thumbnailWidth="100px"
        style={{
          textAlign: "center",
          maxWidth: "500px",
          maxHeight: "300px",
          margin: "40px auto",
        }}
      />
    </div>
  );
}

export default Photos;
