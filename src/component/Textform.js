import React, { useState } from "react";

export default function TextForm(props) {
  const [Text, setText] = useState("");

  // text = "dhshdssjjsh" // worng way to change the state
  // setText("New Text"); // correct way to change the state

  const handleUPClick = () => {
    // console.log("clicked " + Text)
    let newText = Text.toUpperCase();
    setText(newText);
    props.showalert("success", "Convert To Upper Case")
  };

  const handleLoClick = () => {
    let newText = Text.toLowerCase();
    setText(newText);
    props.showalert("success", "Convert to lower Case")
  };

  const handleClearClipboard = () => {
    setText("")
    props.showalert("success", "Clear clip board")
  }

  const handleOnChange = (event) => {
    // console.log("on change")
    setText(event.target.value);
  };

  const handleCopyText = () => {
    let newtext = document.getElementById("textBox")
    newtext.select()
    navigator.clipboard.writeText(newtext.value)
    document.getSelection().removeAllRanges()
    props.showalert("success", "Copy All Text")
  }

  const handleExtraSpace = () => {
    let newtext = Text.split(/[ ]+/)
    setText(newtext.join(" "))
    props.showalert("success", "Remove Extra Spaces")
  }

  let word = Text.split(/\s/).filter((text) => {return text}).length;


  return (
    <>
      <div className="container mb-3 my-3" style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h1>{props.heading}</h1>
        <textarea
          className="form-control"
          id="textBox"
          rows="8"
          value={Text}
          onChange={handleOnChange}
          style={{backgroundColor: props.mode === "dark" ? "#043962" : "white",
           color: props.mode === "dark" ? "white" : "black"}}
        ></textarea>
      </div>
      <div className="container">
        <button disabled={Text.length === 0} className="btn btn-primary me-2 mt-2" onClick={handleUPClick}>
          convert to upper case
        </button>
        <button disabled={Text.length === 0} className="btn btn-primary me-2 mt-2" onClick={handleLoClick}>
          Convert to Lower Case
        </button>
        <button disabled={Text.length === 0} className="btn btn-primary me-2 mt-2" onClick={handleClearClipboard}>
          Clear Clipboard
        </button>
        <button disabled={Text.length === 0} className="btn btn-primary me-2 mt-2" onClick={handleCopyText}>
          Copy Text
        </button>
        <button disabled={Text.length === 0} className="btn btn-primary me-2 mt-2" onClick={handleExtraSpace}>
          Remove Extra Space
        </button>
      </div>
      <div className="container mt-2" style={{color: props.mode === "dark" ? "white" : "black"}}>
        <h1>Your Text Summary</h1>
        <p>
          {word} word and {Text.split(/\s+/).join("").length} characters
        </p>
        <p>{0.008 * Text.split(/\s/).filter((text) => text).length} Minutes Read</p>
        <h2>Preview</h2>
        <h6>{Text.length > 0 ? Text : "Enter something in the textbox above to preview it here "}</h6>
      </div>
    </>
  );
}
