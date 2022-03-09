'use strict'

function BinarioADecimal(num) {
  // tu codigo aca
  if (num.constructor != String){
    return "No es Binario"
  }
  
  num = num.replace (/[^01]/, "");

  return Number.parseInt(num, 2);
}

function DecimalABinario(num) {
  // tu codigo aca
 let res = []
 while (num / 2 >= 1){
   let temp = Math.floor (num / 2)
   if ( num % 2 === 0){
     res.unshift(0)
   } else{
     res.unshift(1)
   }
   if (temp === 1) res.unshift(1)
   num = temp
 }
 return res.join("")
}



module.exports = {
  BinarioADecimal,
  DecimalABinario,
}