const Square = ({ colorValue }) => {
  return (
    <section className="square" style={{ backgroundColor: colorValue }}>
      <p>{colorValue ? colorValue : "No Color has been written"}</p>
    </section>
  );
};

Square.defaultProps = {
  colorValue: "No Color has been written",
};
export default Square;
