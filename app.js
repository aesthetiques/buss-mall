'use strict';
//Worked with Anna and Kayla for all of this

//get access to html elements
var picContainer = document.getElementById('pic-container');
var left = document.getElementById('left');
var center = document.getElementById('center');
var right = document.getElementById('right');
var listResults = document.getElementById('list');

var allProducts = [];
  // './img/bag.jpg', './img/banana.jpg', './img/bathroom.jpg', './img/boots.jpg',
  // './img/breakfast.jpg', './img/tauntaun.jpg', './img/wine-glass.jpg', './img/bubblegum.jpg',
  // './img/chair.jpg', './img/cthulhu.jpg', './img/dog-duck.jpg', './img/dragon.jpg', './img/unicorn.jpg',
  // './img/usb.gif', './img/pen.jpg', './img/pet-sweep.jpg', './img/scissors.jpg', './img/shark.jpg',
  // './img/sweep.png', './img/water-can.jpg'];
var totalClicks = 0;
var maxClicks = 25;
var previousImgs = [];
var previousShown = [];
var listFinal = [];
var percentageData = [];

//
var productNames = ['bag', 'banana', 'bathroom', 'boots', 'breakfast', 'tauntaun',
  'wine-glass', 'bubblegum', 'chair', 'cthulhu', 'dog-duck', 'dragon', 'unicorn',
  'usb', 'pen', 'pet-sweep', 'scissors', 'shark', 'sweep', 'water-can'];

//save to local saveProductsToLocalStorage
function saveProductsToLocalStorage(allProducts){
  localStorage.allProducts = JSON.stringify(allProducts);
  console.log('Saved to local storage');
}

//insert product constructor
function Product(name, id, path) {
  this.name = name;
  this.productID = id;
  this.views = 0;
  this.clicks = 0;
  this.path = 'img/' + name + '.jpg';
}

//Create method to get the avg times clicked/shown
Product.prototype.avgClicks = function(){
  var percentage = 100 * (this.clicks / this.views);
  this.percentage = percentage;
};

// Create all products and push them to their array

function createProducts(){
  for(var i = 0; i < productNames.length; i++){
    var name = productNames[i];
    var newItem = new Product(name);
    allProducts.push(newItem);
  }
}

if(localStorage.allProducts){
  allProducts = JSON.parse(localStorage.allProducts);
}else{
  createProducts();
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
  allProducts[previousImgs[0]].views += 1;
  // console.log(allProducts[previousImgs[0]]);
  // allProducts[previousImgs[0]].avgClicks();
  // console.log(allProducts[previousImgs[0]].percentage);
  // previousShown.push(allProducts[previousImgs[0]].views += 1);
  // percentageData.push(allProducts[previousImgs[0]]);
  leftImg.setAttribute('src',[allProducts[previousImgs[0]].path]);
  leftImg.setAttribute('alt',[allProducts[previousImgs[0]].name]);
  picContainer.appendChild(leftImg);
  //center img
  var centerImg = document.createElement('img');
  allProducts[previousImgs[1]].views += 1;
  // console.log(allProducts[previousImgs[1]].percentage);
  // allProducts[previousImgs[1]].avgClicks();
  // console.log(allProducts[previousImgs[1]].percentage);
  // previousShown.push(allProducts[previousImgs[1]].views += 1);
  // percentageData.push(allProducts[previousImgs[1]]);
  centerImg.setAttribute('src',[allProducts[previousImgs[1]].path]);
  centerImg.setAttribute('alt',[allProducts[previousImgs[1]].name]);
  picContainer.appendChild(centerImg);
  //right img
  var rightImg = document.createElement('img');
  allProducts[previousImgs[2]].views += 1;
    // console.log(allProducts[previousImgs[2]].percentage);
    // allProducts[previousImgs[2]].avgClicks();
    // console.log(allProducts[previousImgs[2]].percentage);
    // previousShown.push(allProducts[previousImgs[2]].views += 1);
    // percentageData.push(allProducts[previousImgs[2]]);
  rightImg.setAttribute('src',[allProducts[previousImgs[2]].path]);
  rightImg.setAttribute('alt',[allProducts[previousImgs[2]].name]);
  picContainer.appendChild(rightImg);
  //end starting img creation
}
// return previousImgs;

// createProducts();
generateImg();

//on-click listener
picContainer.addEventListener('click', handlePicturesOnClick);
// event LISTENER for one box that contains all 3 images
function handlePicturesOnClick(event){
  // event.preventDefault(); //stops page from reloading/sending data to server - the default setting for submission
  // event.stopPropagation(); //stops bubbling, stop capturing

  console.log(event.target.alt);
  for(var p = 0; p < allProducts.length; p++){
    if(event.target.alt === allProducts[p].name){
      allProducts[p].clicks += 1;
      totalClicks += 1;
    }
  }

  event.preventDefault(); //stops page from reloading/sending data to server - the default setting for submission
  // event.stopPropagation(); //stops bubbling, stop capturing
  picContainer.innerHTML = '';
  listResults.innerHTML = '';

  console.log('Total clicks:' + totalClicks);
  if(totalClicks < maxClicks){
    for(var q = 0; q < allProducts.length; q++){
      var objectsToPrint = allProducts[q];
      var tagToPrintTo = document.createElement('li');
      tagToPrintTo.textContent = allProducts[q].name + ': ' + allProducts[q].clicks;
      listResults.appendChild(tagToPrintTo);
      // console.log(objectsToPrint);
    }
  } else{
    for(var q = 0; q < allProducts.length; q++){
      var objectsToPrint = allProducts[q];
      var tagToPrintTo = document.createElement('li');
      tagToPrintTo.textContent = allProducts[q].name + ': ' + allProducts[q].clicks;
      listResults.appendChild(tagToPrintTo);
      picContainer.removeEventListener('click', handlePicturesOnClick);
      saveProductsToLocalStorage(allProducts);
    }
  }
  generateImg();
}

//GET THESE RESULTS INTO A FUNCTION TO DELETE EVENT LISTENER AND APPENT LI ELEMENTS TO THE UL I MADE
// function createList(){
// for(var q = 0; q < allProducts.length; q++){
// if(totalClicks < maxClicks){
//     var objectsToPrint = allProducts[q];
//     var objectsToPrintToo = document.createElement('li');
//     objectsToPrintToo.textContent = objectsToPrint + ': ' + objectsToPrint.clicks;
//     listResults.appendChild(objectsToPrintToo);
//     console.log(objectsToPrint);
//   }
// } else{
//   picContainer.removeEventListener('click', handlePicturesOnClick);
// }
// }
