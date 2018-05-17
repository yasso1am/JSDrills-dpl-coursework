var dice = []
var dice1
var dice2

function roll(){
    dice1 = Math.ceil(Math.random() * 6)
    dice2 = Math.ceil(Math.random() * 6)
  dice.push(dice1)
  dice.push(dice2)
  return dice
}

console.log(roll())
