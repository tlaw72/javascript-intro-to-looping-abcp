var array = [];

function forLoop (array) { 
  for (let i=0; i<25; i++) {
    if (i===1) {
      array.push(`I am 1 strange loop.`);
    return array;
    } else {
      array.push(`I am ${i} strange loops.`);
      return array;
    }
    
  }
}

forLoop(array);


let whileLoop = function(n) {
  let n = 100;
  while(n>0) {
    console.log(--n);
  }
}
whileLoop(100);

function maybeTrue() {
  return Math.random() >= 0.5 // Returns a random number between 0 (inclusive) and 1 (exclusive)
}

function doWhileLoop (array) {
  do {
    array.slice();
  } while (maybeTrue());
};