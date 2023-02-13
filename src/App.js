import "./App.css";
import NavBar from "./component/Navbar";
import TextForm from "./component/Textform";
import About from "./component/About";
import Alert from "./component/Alert";
import React, { useState } from "react";
import { Routes, Route } from "react-router-dom";

// let name = "<b>king</b>"
// let name = "king"

function App() {
  const [mode, setMode] = useState("light");

  const changeMode = () => {
    if (mode === "light") {
      setMode("dark");
      document.body.style.backgroundColor = "#042743";
      showAlert("success", "Light Mode Enable");
      setaboutstyle({ color: "white", backgroundColor: "#043962" });
    } else {
      setMode("light");
      document.body.style.backgroundColor = "white";
      showAlert("success", "Dark Mode Enable");
      setaboutstyle({ color: "black", backgroundColor: "white" });
    }
  };

  const [alert, setalert] = useState(null);

  const showAlert = (type, message) => {
    setalert({
      msg: message,
      typ: type,
    });
    setTimeout(() => {
      setalert(null);
    }, 1500);
  };

  const [aboutstyle, setaboutstyle] = useState({
    color: "black",
    backgroundColor: "white",
  });

  return (
    <>
      <NavBar
        title="TextUtils"
        AboutText="About TextUtils"
        mode={mode}
        togglemode={changeMode}
      />
      {/* <NavBar/> */}
      <Alert alert={alert} />

      <Routes>
        <Route path="/about" element={<About mystyle={aboutstyle} mode={mode} />}/>
          
        <Route path="/" element={<TextForm
            heading="Enter the text to analyze below"
            mode={mode}
            showalert={showAlert}
          />}/>
        
      </Routes>
    </>
  );
}

export default App;
