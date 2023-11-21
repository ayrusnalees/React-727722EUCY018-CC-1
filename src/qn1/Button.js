import React, { useState } from "react";
import Button from "@mui/material/Button";
import '../App.css'
function App() {
  const [hideText, setHideText] = useState(true);
  const [text, settext] = useState("hide");

  function changeR() {
    setHideText(!hideText);
    if (hideText) {
      settext("show");
    } else {
      settext("hide");
    }
  }

  const Text = () => <div><h1>I will disappear,BYE!</h1></div>;
  return (
    <div>
      <Button class='hide' variant="contained" onClick={changeR} size="small">
        {text}
      </Button>
      {hideText ? <Text /> : null}
    </div>
  );
}

export default App;