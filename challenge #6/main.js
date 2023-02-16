// function largestOfFour(arr) {
//   //You can do this!
//   let maxes = [];
//   for(let i =0; i < arr.length; i++) {
//        let tempMax = arr[i][0];
//       for(let j =0; j <arr[i].length;j++) {
//          var currentElement = arr[i][j];
//          if(currentElement >= tempMax) {
//             tempMax = currentElement;
//          }
//       }
//       maxes.push(tempMax);
//   }
//   return maxes;
// }


// function largestOfFour(arr) {
//   //You can do this!
//   let maxes = [0,0,0,0];
//   for(let i =0; i < arr.length; i++) {
//       for(let j =0; j <arr[i].length;j++) {
//          var currentElement = arr[i][j];
//          if(currentElement >= maxes[i]) {
//             maxes[i] = currentElement;
//          }
//       }
//   }
//   return maxes;
// }

function findMax(arr) {
    let max = arr[0];
    for(let i =0; i < arr.length; i++) {
        if(arr[i] > max) max = arr[i];
    }
    return max;
}

function largestOfFour(arr) {
  //You can do this!
  let maxes = [];
  for(let i =0; i < arr.length; i++) {
     let innerMax = findMax(arr[i]);
     maxes.push(innerMax);
  }
  return maxes;
}


console.log(largestOfFour([[4,5,1,3],[13,27,18,26],[32,35,37,39],[100,1001,857,1]]))
