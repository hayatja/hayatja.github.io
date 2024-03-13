import { TypeAnimation } from "react-type-animation";

const Title = () => {
  return (
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
      className="title-animation" // Add this line
      speed={50}
      style={{
        fontWeight: "700",
        fontFamily: "helvetica",
        // fontSize: "3em", // Move this to your CSS file
        color: "#38214a",
        textDecoration: "underline",
        background: "#e4ddeb",
        paddingInline: "20px",
        paddingTop: "10px",
        paddingBottom: "10px",
        borderRadius: "10px",
      }}
      repeat={Infinity}
    />
  );
};

export default Title;
