var vowels

function vowelCount(str) {
  vowels = str.match(/[aeiou/gi]/)
  return vowels = vowels.length
}

console.log(vowelCount('Hello my name is Andrew, this is a string'))
