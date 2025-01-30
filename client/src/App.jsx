import { useState } from "react";
import ExcuseButton from "./components/button";
import ExcusesResponse from "./components/excusesresponse";

function App() {
  const [excuse, setExcuse] = useState("");

  return (
    <div>
      <h1>Random Excuse Generator</h1>
      <ExcuseButton setExcuse={setExcuse} />
      <ExcusesResponse excuse={excuse}/>
    </div>
  );
}

export default App;
