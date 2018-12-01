function tentukanDeretAritmatika (arr) {
  // you can only write your code here!
  var temp = []
  var secondTemp = 0
  var thirdTemp = 0
  for (var i = arr.length - 1; i >= 0; i--) {
    temp.push(arr[i])
  }
  secondTemp = temp[0] - temp[0 + 1]
  thirdTemp = temp[1] - temp[1 + 1]

  if (secondTemp === thirdTemp) {
    return true
  } else {
    return false
  }

  // console.log(secondTemp, thirdTemp)
  // console.log(temp[i])
  // return secondTemp
}

// TEST CASES
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 5, 6])) // true
console.log(tentukanDeretAritmatika([2, 4, 6, 12, 24])) // false
console.log(tentukanDeretAritmatika([2, 4, 6, 8])) // true
console.log(tentukanDeretAritmatika([2, 6, 18, 54])) // false
console.log(tentukanDeretAritmatika([1, 2, 3, 4, 7, 9])) // false
