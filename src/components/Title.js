import React from "react";
import { TypeAnimation } from "react-type-animation";

const Title = () => {
  return (
    <div className="title-container">
      <TypeAnimation
        sequence={[
          "an electrical engineer.",
          2000,
          "a computer scientist.",
          2000,
          "a developer.",
          2000,
          "a student.",
          2000,
        ]}
        wrapper="span"
        className="title-animation"
        speed={50}
        repeat={Infinity}
      />
    </div>
  );
};

export default Title;
