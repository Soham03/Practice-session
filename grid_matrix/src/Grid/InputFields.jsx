import '../index.css'

export const InputFields = (props) => {
  const { length, breadth, setBreadth, setLength } = props;

  return (
    <>
      <input
        id="length-input"
        type="number"
        value={length}
        onChange={(e) => setLength(e.target.value)}
        placeholder="Enter number of Rows"
      />
      <input
        id="breadth-input"
        type="number"
        value={breadth}
        placeholder="Enter number of Columns"
        onChange={(e) => setBreadth(e.target.value)}
      />
    </>
  );
};
