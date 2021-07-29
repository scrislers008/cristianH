'use strict';
function binADecimal(num) {
   let sum = 0;

   for (let i = 0; i < num.length; i++) {
      sum += +num[i] * 2 ** (num.length - 1 - i);
   }
   return sum;
}

console.log(binADecimal('10110'));


function decimalBinario(num) {
while (num!==0) {
   let exp=0;
   let binario=0;
   const digito=num%2;

   exp++;
   num=num/2;
   binario=binario+digito*Math.pow(10,exp);
}
}

console.log(decimalBinario(22));