function testing (num) {
  var result = []
  var temp = []
  counter = 1
  for (var i = 0; i < num; i++) {
    for (j = 0; j < num; j++) {
      temp.push(counter)
      counter += num
    }
    result.push(temp)
    temp = []
    counter -= 8
  }
  return result
}

console.log(testing(3))
