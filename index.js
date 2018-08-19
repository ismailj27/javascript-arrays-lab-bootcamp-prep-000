// Add your functions and code here

var kittens = ["Milo", "Otis", "Garfield"]

function destructivelyAppendKitten(name) {
  kittens.push(name)
}

function destructivelyPrependKitten(name) {
  kittens.unshift(name)
}

function destructivelyRemoveLastKitten() {
  kittens.pop()
}

function destructivelyRemoveFirstKitten() {
  kittens.shift()
}

function appendKitten(name) {
  var array2 = [name];
  return kittens.concat(array2)
}

function prependKitten(name) {
  var array3 = [name];
  return array3.concat(kittens)
}

function removeLastKitten() {
  kittens.slice(0,2)
}

function removeFirstKitten() {
 kittens.slice(1)
}









