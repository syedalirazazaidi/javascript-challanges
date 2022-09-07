// sum of diagnol

var arry = [
  [1, 2, 3],
  [3, 4, 5],
  [5, 6, 6],
]
let sum = 0
for (let index = 0; index < arry.length; index++) {
  for (var i = 0; i < arry.length; i++) {
    if (i === index) {
      sum += arry[i][index]
    }
  }
}
console.log(sum)
