import React, { useEffect } from "react";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { faLinkedin } from "@fortawesome/free-brands-svg-icons";
import Title from "./components/Title";
import { Tooltip } from "react-tooltip";
import "./App.css";

function App() {
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
        </div>

        <div className="links">
          <a
            href={"/hayat-resume.pdf"}
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
            href={"https://www.linkedin.com/in/your-linkedin-profile/"}
            data-tooltip-id="linkedin-tooltip"
            data-tooltip-content="LinkedIn"
            data-tooltip-place="top"
          >
            <button>
              <FontAwesomeIcon icon={faLinkedin} />
            </button>
          </a>
        </div>

        <Tooltip id="resume-tooltip" />
        <Tooltip id="git-tooltip" />
        <Tooltip id="linkedin-tooltip" />
      </div>
    </div>
  );
}

export default App;