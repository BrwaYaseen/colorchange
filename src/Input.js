const Input = ({ colorValue, setColotValue }) => {
  return (
    <form onSubmit={(e) => e.preventDefault()}>
      <label htmlFor="">Add Color Name: </label>
      <input
        type="text"
        autoFocus
        required
        placeholder="Add Color Name"
        value={colorValue}
        onChange={(e) => setColotValue(e.target.value)}
      />
    </form>
  );
};

export default Input;
