import React from "react";
import { TypeAnimation } from "react-type-animation";

const Title = () => {
  return (
    <div className="title-container" style={{ 
      position: 'fixed', // ensures title is in fixed viewpoint
      left: '50%', 
      transform: 'translateX(-50%)' 
      }}>
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
        style={{
          fontWeight: "700",
          fontSize: "3em",
          fontFamily: "helvetica",
          textDecoration: "underline",
          background: "#e4ddeb",
          paddingInline: "20px",
          paddingTop: "10px",
          paddingBottom: "10px",
          borderRadius: "10px",
        }}
        repeat={Infinity}
      />
    </div>
  );
};

export default Title;
