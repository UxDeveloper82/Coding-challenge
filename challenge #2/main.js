function factorialize(num) {
   let result = 1;

   for (let i=1; i <num; i++ ) {
    //result = result * i;
    result *= i;
   }
   console.log(result);

}

factorialize(5);

