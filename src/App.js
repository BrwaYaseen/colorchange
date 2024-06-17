import { useState } from "react";
import Input from "./Input";
import Square from "./Square";

function App() {
  const [colorValue, setColotValue] = useState();
  const [hexValue, setHexValue] = useState();
  const [isDarkText, setIsDarkText] = useState(true);
  return (
    <div className="App">
      <Square
        colorValue={colorValue}
        hexValue={hexValue}
        isDarkText={isDarkText}
      />
      <Input
        colorValue={colorValue}
        setColotValue={setColotValue}
        hexValue={hexValue}
        setHexValue={setHexValue}
        isDarkText={isDarkText}
        setIsDarkText={setIsDarkText}
      />
    </div>
  );
}

export default App;
