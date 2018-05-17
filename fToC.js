function fToC(x){
  x = ((x-32) * (5/9)).toFixed(1)
  return x
}

function cToF(x){
  x = ((x+32) * (9/5))
  return x
}


console.log(fToC(65))

console.log(cToF(15))
