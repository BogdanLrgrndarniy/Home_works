let colorMarker = 'black';
let string = 'hello how are you ?';

//Простой маркер
const marker = new Marker('black', 50);
marker.print('hello how are you ?');

//заправляющийся маркер
const refillableMarker = new RefillableMarker(colorMarker,8);
refillableMarker.refillMarker(30);