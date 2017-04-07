function makeLoadedDie() {
  var list = [5, 4, 6, 1, 6, 4, 2, 3, 3, 5];
  var i = 0;
  return function() {
    if(i === list.length) {
      i = 0;
    }
    return list[i++];
  }
}

var rollLoadedDie = makeLoadedDie();
console.log(rollLoadedDie());  // 5
console.log(rollLoadedDie());  // 4
console.log(rollLoadedDie());  // 6

// for(var i= 0; i<12; i++) {
//   console.log(rollLoadedDie());
// }
