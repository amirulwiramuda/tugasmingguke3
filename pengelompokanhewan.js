function groupAnimals (animals) {
  // you can only write your code here!

  var kandang = [[]]
  var result = []
  var kelompokKandang = []
  for (var i = 0; i <= animals.length - 1; i++) {
    kandang.push(animals[i])
    if (animals[i][0] === kandang[i][0]) {
      kandang.push(animals)
    } else if (animals[i][0] !== kandang[i][0]) {
      var newkandang = []
      newkandang.push(animals[i])
    }
  }
  result.push(kandang, newkandang)
  //console.log(animals[0][0])
  return result
}

// TEST CASES
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil']))
// [ ['ayam', 'anoa'], ['cacing'], ['kuda', 'kancil'] ]
console.log(groupAnimals(['cacing', 'ayam', 'kuda', 'anoa', 'kancil', 'unta', 'cicak' ]))
// [ ['ayam', 'anoa'], ['cacing', 'cicak'], ['kuda'], ['unta'] ]
