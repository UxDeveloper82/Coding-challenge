function findLongestWord(str) {
   return str.split(" ").sort(function(a,b) {return b.length - a.length})[0];

   // let words = str.split(" ");
   // let longest = "";
   
   // for(let word of words) {
   //    if(word.length > longest.length) longest = word;
   // }
   // return longest.length;

}

console.log(findLongestWord("the quick fax jumped over the lazy dog"));



