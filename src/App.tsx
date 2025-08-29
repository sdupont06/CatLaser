import { useState } from "react";

function App() {
  let [manualButton, setManualButton] = useState(true);

  return (
    <>
      <div className="container">
        <div className="row justify-content-center align-items-start">
          <video></video>
        </div>
        <div className="row justify-content-center align-items-center">
          <div className="col-4 text-center">
            <h1>Targeting Mode</h1>
          </div>
        </div>
        <div className="row justify-content-center">
          <div className="col-sm-1 text-center">
            <button
              className={`btn btn-${manualButton ? "danger" : "secondary"}`}
              onClick={() => {
                setManualButton(true);
              }}
            >
              Manual Mode
            </button>
          </div>
          <div className="col-sm-1 text-center">
            <button
              className={`btn btn-${manualButton ? "secondary" : "danger"}`}
              onClick={() => {
                setManualButton(false);
              }}
            >
              Auto Mode
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default App;
