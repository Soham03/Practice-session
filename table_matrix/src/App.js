import React,{useState} from 'react';

import './App.css';

function App() {
  const [row,setRow]=useState("");
  const [column,setColumn]=useState("");

  const catchRows=(event)=>{
    let numberOfRows=event.target.value;
    (setRow(numberOfRows))
  }

  const catchColumns=(event)=>{
    let numberOfColumns=event.target.value;
    (setColumn(numberOfColumns));
  }
  let array1=[];
  let result;
  
  
  const handleClick=()=>{
    
    let alphas = 'ABCDEFGHIJKLMNOPQRSTUVWXYZ';
  let num= parseInt(row*column);
  for(let i=0;i<num;i++)
  {

   let char = alphas.charAt(Math.floor(Math.random() * alphas.length));
    array1.push(char);
  }


    

  
   result = array1.reduce((resultArray, item, index) => { 
    const chunkIndex = Math.floor(index/column)
  
    if(!resultArray[chunkIndex]) {
      resultArray[chunkIndex] = [] 
    }
  
    resultArray[chunkIndex].push(item)
  
    return (resultArray)
 
  }, [])
  
  console.log(result);
 console.log(array1);

}
   
  return (<div className="App">
      <input id="rows" type="number" placeholder="Please enter number of Rows" onChange={catchRows}></input>
      <input id="columns" type="number" placeholder="Please enter number of Columns" onChange={catchColumns}></input>
      <button type="submit" onClick={handleClick}>Create</button>
    </div>
  );
}

export default App;
