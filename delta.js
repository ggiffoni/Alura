let a = 1;
let b = -2;
let c = -3;

function delta() { return b ** 2 - ( 4 * a * c )};

console.log(delta())

function raizDelta() {return Math.pow(delta(), 0.5)};

console.log(raizDelta());


//let delta = (b ** 2 - ( 4 * a * c ) );

//let raizdelta = Math.pow(delta, 0.5);

let x1 = (-b + raizDelta()) / 2 * a;
let x2 = (-b - raizDelta()) / 2 * a;

console.log(x1);
console.log(x2);



//console.log(delta);
//console.log(x1);
//console.log(x2);