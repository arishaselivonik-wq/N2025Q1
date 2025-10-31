const word='стич'
const firstLetters =word.slice(0, 1).toUpperCase()
console.log(firstLetters)
const otherLetters = word.slice(1, word.length) 
console.log(otherLetters)
const res= firstLetters + otherLetters 
console.log(res)