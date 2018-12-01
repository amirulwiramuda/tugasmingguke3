function palindrome (kata) {
  // var palindrome = []
  // var palindromebackwards = []
  var check
  var temp = ''
  // for (var i = 0; i <= kata.length - 1; i++) {
  //   palindrome.push(kata[i])
  // }
  for (var j = kata.length - 1; j >= 0; j--) {
    temp += kata[j]
    // palindromebackwards.push(kata[j])
  }
  // for (var k = 0; k <= palindrome.length - 1; k++) {
  // }

  if (temp === kata) {
    check = true
  } else {
    check = false
  }

  // console.log(palindrome + ' ' + check)
  console.log(kata + ' ' + check)
}

// TEST CASES
console.log(palindrome('katak')) // true
console.log(palindrome('blanket')) // false
console.log(palindrome('civic')) // true
console.log(palindrome('kasur rusak')) // true
console.log(palindrome('mister')) // false
