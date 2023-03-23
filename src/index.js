import React from 'react';
import { render } from "react-dom";
import { CpfInput } from "./lib";

const App = () => (
  <div style={{ width: 640, margin: "15px auto" }}>
    <h1>CPF</h1>
    <CpfInput label="CPF" placeholder="111.111.111-67" onChange="(e) => console.log(e.target.value.trim());" />
  </div>
);

render(<App />, document.getElementById("root"));
