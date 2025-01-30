import { useState } from "react";

function App() {
  const [excuse, setExcuse] = useState("");

  const fetchRandomExcuse = async () => {
    try {
      const response = await fetch("URL HERE");
      const data = await response.json();
      setExcuse(data.text);
    } catch (error) {
      console.error("Error fetching excuse:", error);
      setExcuse("Failed to load excuse. Try again!");
    }
  };

  return (
    <div>
      <h1>Random Excuse Generator</h1>
      <button onClick={fetchRandomExcuse}>Generate Excuse</button>
      <p>{excuse}</p>
    </div>
  );
}

export default App;
