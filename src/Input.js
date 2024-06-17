import colorNames from "colornames";

const Input = ({
  colorValue,
  setColotValue,
  setHexValue,
  isDarkText,
  setIsDarkText,
}) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="">Add Color Name: </label>
      <input
        type="text"
        autoFocus
        required
        placeholder="Add Color Name"
        value={colorValue}
        onChange={(e) => {
          setColotValue(e.target.value);
          setHexValue(colorNames(e.target.value));
        }}
      />
      <button type="button" onClick={() => setIsDarkText(!isDarkText)}>
        {" "}
        Toggle Text Color
      </button>
    </form>
  );
};

export default Input;
