// About.js
import React from "react";

const About = ({ image, about }) => {
  return (
    <aside role="complementary">
      <img src={image || "https://via.placeholder.com/215"} alt="blog logo" />
      <p>{about}</p>
    </aside>
  );
};

export default About;
