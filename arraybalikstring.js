function balikString () {
  var tampung = []
  var string = 'hello world!'
  for (var i = string.length - 1; i >= 0; i--) {
    tampung.push(string[i])
  }
  console.log(tampung.join())
}

balikString()
