let a = 1;
let b = -2;
let c = -3;

let delta = (b ** 2 - ( 4 * a * c ) );

let raizdelta = Math.pow(delta, 0.5);

let x1 = (-b + raizdelta) / 2 * a;
let x2 = (-b - raizdelta) / 2 * a;
let k = Math.pow(2, 0.5);



console.log(delta);
console.log(x1);
console.log(x2);
console.log(raizdelta);
console.log(k);

