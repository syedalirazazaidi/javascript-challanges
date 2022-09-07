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
// console.log(sum)

// remove regix from the string
// he is very good boy, isn't he?
function newFun(str) {
  var reg = ['?', '@', '?', "'", ',']
  var strwithoutregix = ''
  for (let index = 0; index < str.length; index++) {
    var letter = str[index]
    if (reg.includes(letter)) {
      strwithoutregix += ' '
    } else {
      strwithoutregix += letter
    }
  }
  console.log(strwithoutregix)
}
newFun("'he is very good boy, isn't he?")
