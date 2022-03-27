import { useEffect, useState } from "react";
import { GridWithRandomAlphabets } from "./Grid";
import { createTableLikeArray, generateArrayForGrid } from "./helpers";
import { InputFields } from "./InputFields";
import  '../index.css';
 const SearchAbleGrid = () => {
  const [length, setLength] = useState(0);
  const [breadth, setBreadth] = useState(0);
  const [generatedArray, setGeneratedArray] = useState();

  useEffect(() => {
    if (length !== 0 || breadth !== 0) {
      setGeneratedArray(generateArrayForGrid(length, breadth));
    }
  }, [length, breadth]);
  
  return (
    <>
     <h1>Welcome</h1>
      <InputFields
        length={length}
        breadth={breadth}
        setLength={setLength}
        setBreadth={setBreadth}
      />
      <GridWithRandomAlphabets
        tableArray={generatedArray}
        length={length}
        breadth={breadth}
      />
    </>
  );
};

export default SearchAbleGrid; 
