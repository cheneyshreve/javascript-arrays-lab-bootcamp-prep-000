const app = "I don't do much."



function kittens(){
  var kittens = ["Milo","Otis","Garfield"]
}

function destructivelyAppendKitten(name){
  kittens.push(name)
  return kittens
}

function destructivelyPrependKitten(name){
  kittens.unshift(name)
  return kittens
}

function destructivelyRemoveLastKitten(){
  kittens.pop()
  return kittens
}

function destructivelyRemoveFirstKitten(){
  kittens.shift()
  return kittens
}

function appendKitten(name){
 var arr = [name,...kittens]
 return arr
}

function prependKitten(name){
 var purr = [kittens,...name]
 return purr
}

function removeLastKitten(){
  
}

function removeFirstKitten(){
  
}