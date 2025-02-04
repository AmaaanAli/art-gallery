import React from "react";
import img1 from "../assets/images/1.jpg";
import img2 from "../assets/images/2.jpg";
import img3 from "../assets/images/3.jpg";
import img4 from "../assets/images/4.jpg";
import img5 from "../assets/images/5.jpg";
import img6 from "../assets/images/6.jpg";
import img7 from "../assets/images/7.jpg";
import img8 from "../assets/images/8.jpg";

const images = [img1, img2, img3, img4, img5, img6, img7, img8];

const ArtworkGrid = () => (
  <div className="mt-6 grid grid-cols-4 gap-4">
    {images.map((src, index) => (
      <img
        key={index}
        src={src}
        alt="Artwork"
        className="rounded-lg shadow-md"
      />
    ))}
  </div>
);

export default ArtworkGrid;
