'use strict';
//Worked with Anna and Kayla for all of this

//get access to html elements
var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var listShit = document.getElementById('list');

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
function Product(name, id, path) {
  this.name = name;
  this.productID = id;
  this.views = 0;
  this.clicks = 0;
  this.path = 'img/' + name + '.jpg';
}
//Create all products and push them to their array
function createProducts(){
  for(var i = 0; i < productNames.length; i++){
    var name = productNames[i];
    var newItem = new Product(name);
    allProducts.push(newItem);
  }
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
  previousImgs = [leftIndex, centerIndex, rightIndex];
  //creation of first images
  //left img
  console.log(previousImgs);
  var leftImg = document.createElement('img');
  // leftImg.setAttribute('id',[leftImg[i].id]);
  leftImg.setAttribute('src',[allProducts[previousImgs[0]].path]);
  leftImg.setAttribute('alt',[allProducts[previousImgs[0]].name]);
  // leftImg.setAttribute('id',[allProducts[previousImgs[0]].name]);
  picContainer.appendChild(leftImg);
  //center img
  var centerImg = document.createElement('img');
  centerImg.setAttribute('src',[allProducts[previousImgs[1]].path]);
  centerImg.setAttribute('alt',[allProducts[previousImgs[1]].name]);
  // leftImg.setAttribute('id',[allProducts[previousImgs[1]].name]);
  picContainer.appendChild(centerImg);
  //right img
  var rightImg = document.createElement('img');
  rightImg.setAttribute('src',[allProducts[previousImgs[2]].path]);
  rightImg.setAttribute('alt',[allProducts[previousImgs[2]].name]);
  // leftImg.setAttribute('id',[allProducts[previousImgs[2]].name]);
  picContainer.appendChild(rightImg);
  //end starting img creation
}
// return previousImgs;

createProducts();
generateImg();

//on-click listener
picContainer.addEventListener('click', handlePicturesOnClick);
// event LISTENER for one box that contains all 3 images
function handlePicturesOnClick(event){
  console.log(event.target.alt);
  for(var p = 0; p < allProducts.length; p++){
    if(event.target.alt === allProducts[p].name){
      allProducts[p].clicks += 1;
    }
  }

  event.preventDefault(); //stops page from reloading/sending data to server - the default setting for submission
  // event.stopPropagation(); //stops bubbling, stop capturing
  picContainer.innerHTML = '';
  totalClicks += 1;

  console.log('Total clicks:' + totalClicks);
  generateImg();
}
//GET THIS SHIT INTO A FUNCTION TO DELETE EVENT LISTENER AND APPENT LI ELEMENTS TO THE UL I MADE
if(totalClicks === 25){
  picContainer.removeEventListener();
  for(var q = 0; q < allProducts.length; q++){

  }
}
