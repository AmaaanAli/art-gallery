import React from "react";
import bg from "../assets/images/0.jpg";

const GallerySection = () => (
  <section
    className="mt-2 p-2 rounded-xl shadow-lg text-white"
    style={{ backgroundImage: `url(${bg})` }}
  >
    <h2 className="text-3xl text-center font-bold text-white">Digital Art Gallery</h2>
    <p className="mt-3 text-white text-center italic p-3 rounded">
      Step into a world where imagination knows no bounds. [Gallery Name] is a
      haven for art lovers, showcasing a diverse collection of contemporary and
      classical artworks from emerging and established artists. Each piece tells
      a story, evoking emotions and inspiring creativity.
    </p>
  </section>
);

export default GallerySection;
