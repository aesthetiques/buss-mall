'use strict';
//Worked with Anna and Kayla for all of this

//get access to html elements
var picContainer = document.getElementsById('pic-container');
var left = document.getElementById('left');
var right = document.getElementById('center');
var right = document.getElementById('right');

var allProducts = [];
  // './img/bag.jpg', './img/banana.jpg', './img/bathroom.jpg', './img/boots.jpg',
  // './img/breakfast.jpg', './img/tauntaun.jpg', './img/wine-glass.jpg', './img/bubblegum.jpg',
  // './img/chair.jpg', './img/cthulhu.jpg', './img/dog-duck.jpg', './img/dragon.jpg', './img/unicorn.jpg',
  // './img/usb.gif', './img/pen.jpg', './img/pet-sweep.jpg', './img/scissors.jpg', './img/shark.jpg',
  // './img/sweep.png', './img/water-can.jpg'];
var totalClicks = 0;
var maxClicks = 25;
var previousImgs = [];

//
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'tauntaun',
  'wine-glass', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'unicorn',
  'usb', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'water-can'];

//insert product constructor
function Product(name) {
  this.name = name;
  this.views = 0;
  this.clicks = 0;
  this.path = 'img/' + name + '.jpg';
}
//Create all products and push them to their array
for(var i = 0; i < productNames.length; i++){
  var name = picNames[i];
  var newItem = new Product(name);
  allProducts.push(newItem);
}
//
//
//RNG
function randomNum(){
  return Math.floor(Math.random() * productNames.length);
}; //Function for calculating random number

//function(){
//   return Math.floor(Math.floor((Math.random() * (this.maxCust - this.minCust + 1) + this.minCust)) * this.avgSale);
// }; //Function for calculating random number

function generateImg(){
  var leftIndex = randomNum();
  var centerIndex = randomNum();
  var rightIndex = randomNum();

  console.log('Left Index:' + leftIndex);
  console.log('Center Index:' + centerIndex);
  console.log('Right Index:' + rightIndex);

  //firstImg generation
  while(previousImgs.includes(leftIndex)){
    var leftIndex = randomNum();
    console.log('new left:' + leftIndex);

  }
  //end first

  //secondImg generation
  while(centerIndex === leftIndex || previousImgs.includes(centerIndex)){
    var centerIndex = randomNum();
    console.log('new center:' + centerIndex);
  }
  //end secondImg

  //third Img generation
  while(rightIndex === leftIndex || rightIndex === centerIndex || previousImgs.includes(rightIndex)){
    var rightIndex = randomNum();
    console.log('new right:' + rightIndex);
  }
  //end thirdImg
}

previousImgs = [leftIndex, centerIndex, rightIndex];



//
// event LISTENERS
fucntion handlePicturesOnClick(){

  if(event.target.id === 'pics'){
    
  }
}
