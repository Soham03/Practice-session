export const generateRandomAlphabets = () => {
  const alphabet = "abcdefghijklmnopqrstuvwxyz";
  return alphabet[Math.floor(Math.random() * alphabet.length)];
};

export const generateArrayForGrid = (row, column) => {
  const arrayForGrid = [];
  let totalNumberOfElements = row * column;
  while (!!totalNumberOfElements) {
    arrayForGrid.push({
      alphabet: generateRandomAlphabets(),
      isSearched: false,
    });
    totalNumberOfElements = totalNumberOfElements - 1;
  }
  return arrayForGrid;
};

export const createTableLikeArray = (row, column, arrayForGrid) => {
  const outerArray = [];
  for (let i = 0; i < column; i++) {
    outerArray.push(arrayForGrid.splice(0,row));
  }
  console.log(outerArray);
  return outerArray || null;
};

// export const searchForValues = (tableArray, searchedValue,column) => {
//   if (!!tableArray?.length && searchedValue) {
//     console.log(tableArray);
//     const flatArray = [].concat(...tableArray);
//     return flatArray?.map((item) => {
//       if (item?.alphabet === searchedValue) {
//         return {
//           ...item,
//           isSearched: true,
//         };
//       } else {
//         return {
//           ...item,
//           isSearched: false,
//         };
//       }
//     });
//   }
//   return tableArray;
// };


export const searchForValues = (tableArray, searchedValue) => {
  if (!!tableArray?.length && searchedValue) {
    let newArray=searchedValue.split("");
    // const flatArray = [].concat(...tableArray);
    // console.log(`The flat array is ${flatArray}`)
      // if (item?.alphabet === searchedValue) {
      //   return {
      //     ...item,
      //     isSearched: true,
      //   };
      // } else {
      //   return {
      //     ...item,
      //     isSearched: false,
      //   };
      // }
              tableArray?.map((item) => {
               item.map((item2)=>{
              newArray.map((item3)=>{
            if(item2.alphabet===item3)  
            {
             return {
                    ...item2,
                    isSearched: true,
                  };
            }
            else {
                return {
                  ...item2,
                  isSearched: false,
                };
            
          }
        }
          )
        })
  })
  }
  }
   





