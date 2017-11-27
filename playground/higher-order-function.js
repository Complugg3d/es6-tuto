// function one (name, location) {
//   console.log(name, location);
// }

// function two () {
//   console.log('Args', arguments);
//   one.apply(undefined, arguments);
// }

// two('Andrew', 'Philadelphia');
// two.apply(undefined,['Jen', 'San Fran']);

var add = (a, b) => a + b;

var square = (a) => a * a;

var callAndLog = (func) => {
  return function() {
    var res = func.apply(undefined, arguments);
    
    console.log('Result is ' + res);
    
    return res;
  };
};

console.log(add(99, 1));

var addAndLog = callAndLog(add);

var squareAndLog = callAndLog(square);

console.log(addAndLog(44, -3));
console.log(squareAndLog(3));