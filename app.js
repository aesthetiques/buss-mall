'use strict';
//Worked with Anna and Kayla for all of this

var allProducts = ['./img/bag.jpg', './img/banana.jpg', './img/bathroom.jpg', './img/boots.jpg',
  './img/breakfast.jpg', './img/tauntaun.jpg', './img/wine-glass.jpg', './img/bubblegum.jpg', './img/chair.jpg', './img/cthulhu.jpg', './img/dog-duck.jpg', './img/dragon.jpg', './img/unicorn.jpg', './img/usb.gif', './img/pen.jpg', './img/pet-sweep.jpg', './img/scissors.jpg', './img/shark.jpg', './img/sweep.png', './img/water-can.jpg'];
var previousImgs = [];

function randomNum(){
  return Math.floor(Math.floor(Math.random() * (20 - 1 + 1) + 1));
}; //Function for calculating random number

//function(){
//   return Math.floor(Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) * this.avgSale);
// }; //Function for calculating random number

//firstImg
var leftIndex = randomNum();
var leftImg = allProducts[leftIndex];
previousImgs.push(leftIndex);
//end first

//secondImg
var centerIndex = randomNum();
while(centerIndex === leftIndex){
  var centerIndex = randomNum();
}
var centerImg = allProducts[rightIndex];
previousImgs.push(centerIndex);
//end secondImg

//Third Img
var rightIndex = randomNum();
while(rightIndex === leftIndex || rightIndex === centerIndex){
  var rightIndex = randomNum();
}
var rightImg = allProducts[rightIndex];
previousImgs.push(rightIndex);
//end thirdImg
