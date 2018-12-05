function groupAnimals (animals) {
  // you can only write your code here!
  var temp = []
  var counter = 0
  animals.sort()
  for (var i = 0; i < animals.length; i++) {
    if (temp.length === 0) {
      temp.push([animals[i]])
    } else if (temp[counter][0][0] === animals[i][0]) {
      temp[counter].push(animals[i])
    } else {
      temp.push([animals[i]])
      counter += 1
    }
  }
  return temp
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(
  groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak'])
)
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
