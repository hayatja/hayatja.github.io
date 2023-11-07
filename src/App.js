import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFileInvoice } from "@fortawesome/free-solid-svg-icons";
import { faCodeCompare } from "@fortawesome/free-solid-svg-icons";
import { Tooltip } from "react-tooltip";
// import { ToastContainer, toast } from "react-toastify";
import "react-toastify/dist/ReactToastify.css";
import GridLines from "react-gridlines";
import Title from "./components/Title";
import "./App.css";

function App() {
  // const notifyResume = () => toast("Resume under development!");

  return (
    <GridLines
      className="grid-area"
      cellWidth={30}
      lineColor="#e4ddeb"
      strokeWidth={5}
    >
      <div className="App">
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
        </div>

        <div
          style={{
            marginTop: "70px",
            display: "flex",
            flexDirection: "row",
            justifyContent: "center",
            gap: "20px",
          }}
        >
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
        </div>

        <Tooltip id="resume-tooltip" />
        <Tooltip id="git-tooltip" />

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
      </div>
    </GridLines>
  );
}

export default App;
