import { useState } from "react";
import Input from "./Input";
import Square from "./Square";

function App() {
  const [colorValue, setColotValue] = useState();
  return (
    <div className="App">
      <Square colorValue={colorValue} />
      <Input colorValue={colorValue} setColotValue={setColotValue} />
    </div>
  );
}

export default App;
