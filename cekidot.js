function pasanganTerbesar (num) {
  // you can only write your code here!
  var numString = num.toString()
  var temp = []
  for (var i = 0; i <= numString.length - 1; i++) {
    temp.push(numString[i] + numString[i + 1])
  }
  temp.sort(function (a, b) {
    return b - a
  })
  return temp[0]
}

// TEST CASES
console.log(pasanganTerbesar(641573)) // 73
console.log(pasanganTerbesar(12783456)) // 83
console.log(pasanganTerbesar(910233)) // 91
console.log(pasanganTerbesar(71856421)) // 85
console.log(pasanganTerbesar(79918293)) // 99