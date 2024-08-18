<<<<<<< HEAD
import React, { useEffect } from "react";
=======
import React, { useState } from 'react';
>>>>>>> 32172f8097e1d6681f9ac4c7f668cec425d160a0
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import {faAdjust } from "@fortawesome/free-solid-svg-icons";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
<<<<<<< HEAD
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
=======
import { faLinkedinIn } from "@fortawesome/free-brands-svg-icons";
import { Tooltip } from "react-tooltip";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GridLines from "react-gridlines";
>>>>>>> 32172f8097e1d6681f9ac4c7f668cec425d160a0
import Title from "./components/Title";
import { Tooltip } from "react-tooltip";
import "./App.css";

function App() {
<<<<<<< HEAD
  useEffect(() => {
    const container = document.querySelector("#container");
    const tile = document.createElement("div");
    tile.className = "tile";

    for (let i = 0; i < 1599; i++) {
      container.appendChild(tile.cloneNode());
    }
  }, []);

  return (
    <div className="App">
      <div id="container"></div>

      <div className="content">
        <div className="intro">
          <span className="intro-text">Hi I'm Hayat</span>
        </div>
        <div style={{ marginTop: "30px" }}>
          <Title />
=======
  const [darkMode, setDarkMode] = useState(false);

  return (
    <GridLines
      className={`grid-area ${darkMode ? 'dark-mode' : ''}`}
      cellWidth={30}
      lineColor={darkMode ? "#666" : "#e4ddeb"}
      strokeWidth={5}
    >
      <div className={`App ${darkMode ? 'dark-mode' : ''}`}>
        <button className="dark-mode-toggle" onClick={() => setDarkMode(!darkMode)}>
          <FontAwesomeIcon icon={faAdjust} />
        </button>
        <div
          style={{
            display: "flex",
            flexDirection: "column",
            justifyContent: "center",
          }}
        >
          <div
            style={{
              fontWeight: "100",
              fontFamily: "helvetica",
              fontSize: "3em",
              color: "#FFF",
            }}
          >
            <span
              style={{
                background: "#38214a",
                paddingInline: "20px",
                paddingTop: "10px",
                paddingBottom: "10px",
                borderRadius: "10px",
              }}
            >
              Hi I'm Hayat
            </span>
            {/* <span>&nbsp;</span> */}
          </div>
          <div style={{ marginTop: "30px" }}>
            <Title></Title>
          </div>
>>>>>>> 32172f8097e1d6681f9ac4c7f668cec425d160a0
        </div>

        <div className="links">
          <a
            href={"/hayat_website_resume.pdf"}
            data-tooltip-id="resume-tooltip"
            data-tooltip-content="Resume"
            data-tooltip-place="top"
          >
            <button>
              <FontAwesomeIcon icon={faFileInvoice} />
            </button>
          </a>

          <a
            href={"https://github.com/hayatja"}
            data-tooltip-id="git-tooltip"
            data-tooltip-content="GitHub"
            data-tooltip-place="top"
          >
            <button>
              <FontAwesomeIcon icon={faCodeCompare} />
            </button>
          </a>

          <a
<<<<<<< HEAD
            href={"https://www.linkedin.com/in/your-linkedin-profile/"}
=======
            href="https://www.linkedin.com/in/hayat-ja/"
>>>>>>> 32172f8097e1d6681f9ac4c7f668cec425d160a0
            data-tooltip-id="linkedin-tooltip"
            data-tooltip-content="LinkedIn"
            data-tooltip-place="top"
          >
            <button>
<<<<<<< HEAD
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </a>
=======
            <FontAwesomeIcon icon={faLinkedinIn} />
              </button>
          </a>

>>>>>>> 32172f8097e1d6681f9ac4c7f668cec425d160a0
        </div>

        <Tooltip id="resume-tooltip" />
        <Tooltip id="git-tooltip" />
        <Tooltip id="linkedin-tooltip" />
<<<<<<< HEAD
=======

        {/* <ToastContainer
          position="top-right"
          autoClose={5000}
          hideProgressBar={false}
          newestOnTop={false}
          closeOnClick
          rtl={false}
          pauseOnFocusLoss
          draggable
          pauseOnHover
          theme="dark"
        ></ToastContainer> */}
>>>>>>> 32172f8097e1d6681f9ac4c7f668cec425d160a0
      </div>
    </div>
  );
}

export default App;
