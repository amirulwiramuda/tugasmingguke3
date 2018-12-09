function targetTerdekat (arr) {
  // you can only write your code here!

  var countero = 0
  var counterx = 0
  var check = false
  var checkx = false

  for (var i = 0; i < arr.length; i++) {
    if (arr[i] === 'o' || check) {
      if (arr[i] === 'x') break

      countero += 1
      check = true

      if ((i + 1) >= arr.length) countero = 0
    }
    if (arr[i] === 'x' || checkx) {
      checkx = true
      counterx++
      if (arr[i] === 'x') counterx = 0
      if (arr[i] === 'o') {
        if (countero > 0 && counterx < countero) { countero = counterx}
        break
      }
    }
  }
  return countero
}

// TEST CASES
console.log(targetTerdekat([' ', ' ', 'o', ' ', ' ', 'x', ' ', 'x'])) // 3
console.log(targetTerdekat(['o', ' ', ' ', ' ', 'x', 'x', 'x'])) // 4
console.log(targetTerdekat(['x', ' ', ' ', ' ', 'x', 'x', 'o', ' '])) // 1
console.log(targetTerdekat([' ', ' ', 'o', ' '])) // 0
console.log(targetTerdekat([' ', 'o', ' ', 'x', 'x', ' ', ' ', 'x'])) // 2

