function angkaPalindrome (num) {
  var numToString
  for (var i = 0; i < num; i++) {
    num++
    numToString = num.toString()
    var length = numToString.length
    var temp = ''
    for (var j = length - 1; j >= 0; j--) {
      temp += numToString[j]
      if (numToString === temp) {
        result = parseInt(temp)
        return result
      }
    }
  }
}
// TEST CASES
console.log(angkaPalindrome(8)) // 9
console.log(angkaPalindrome(10)) // 11
console.log(angkaPalindrome(117)) // 121
console.log(angkaPalindrome(175)) // 181
console.log(angkaPalindrome(1000)) // 1001
