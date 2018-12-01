function dataHandle2 () {
  var arrAwal = ['0001', 'Roman Alamsyah', 'Bandar Lampung', '21/05/1989', 'Membaca']
  arrAwal.splice(1, 1, 'Roman Alamsyah Elsharawy')
  arrAwal.splice(2, 1, 'Provinsi Bandar Lampung')
  arrAwal.splice(4, 0, 'pria')
  arrAwal.splice(5, 1, 'SMA Internasional Metro')
  // console.log(arrAwal[3].split('/'))
  var newbln = arrAwal[3].split('/')
  var bln = newbln[1] - '0'
  var join = newbln.join('-')
  var sort = newbln.sort(function (value1, value2) {
    return value2 - value1
  })
  var slice = arrAwal[1].slice(0,15)
  switch (bln) {
    case 1: { bln = (' Januari '); break }
    case 2: { bln = (' Februari '); break }
    case 3: { bln = (' Maret '); break }
    case 4: { bln = (' April '); break }
    case 5: { bln = (' Mei '); break }
    case 6: { bln = (' Juni '); break }
    case 7: { bln = (' Juli '); break }
    case 8: { bln = (' Agustus '); break }
    case 9: { bln = (' September '); break }
    case 10: { bln = (' Oktober '); break }
    case 11: { bln = (' November '); break }
    case 12: { bln = (' Desember '); break }
  }
  console.log(arrAwal)
  console.log(bln)
  console.log(sort)
  console.log(join)
  console.log(slice)
}

dataHandle2()
