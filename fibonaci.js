//fibby

function iFib(num) {
  var left = 1
  var right = 0
  var temp

  while (num>= 0) {
    temp = left
    left = left + right
    right = temp
    num --
  }
  return right
}

//recursive fibby

function rFib(num) {
  if ( num <= 1 )
  return 1
  return rFib( num - 1 ) + rFib ( num - 2 )
}
