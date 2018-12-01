function tentukanDeretGeometri (arr) {
  var temp = []
  var secondTemp = 0
  var thirdTemp = 0
  for (var i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i])
  }
  secondTemp = temp[0] / temp[0 + 1]
  thirdTemp = temp[1] / temp[1 + 1]

  if (secondTemp === thirdTemp) {
    return true
  } else {
    return false
  }
}

// TEST CASES
console.log(tentukanDeretGeometri([1, 3, 9, 27, 81])) // true
console.log(tentukanDeretGeometri([2, 4, 8, 16, 32])) // true
console.log(tentukanDeretGeometri([2, 4, 6, 8])) // false
console.log(tentukanDeretGeometri([2, 6, 18, 54])) // true
console.log(tentukanDeretGeometri([1, 2, 3, 4, 7, 9])) // false
