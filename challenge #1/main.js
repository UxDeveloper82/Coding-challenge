function reverseString(str) {
//   let strArr = str.split("");
//   let reverseStrArray = strArr.reverse();
//   let reversedString  = reverseStrArray.join("");
//   return reversedString;
//return str.split("").reverse().join("");

let final = "";
    for( var i =str.length -1; i >= 0; i--) {
        final += str[i];
    }
    return final;

}

console.log(reverseString("hello"));

//let random = ["h","e","l"];
//console.log(random.reverse());