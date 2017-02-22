'use strict';
var context = document.getElementById('chart').getContext('2d');
// var data = [12, 11, 10, 9, 8, 7 , 6];
var labelColors =
  ['cyan', 'red', 'orange', 'purple', 'lime', 'yellow',
    'pink', 'red', 'purple', 'blue', 'lime', 'orange',
    'violet', 'aquamarine', 'yellow', 'black', 'green',
    'salmon', 'violet', 'black'];
var allProducts = JSON.parse(localStorage.allProducts);

function allProductClicks(products){
  var productClicks = [];
  for (var i = 0; i < products.length; i++) {
    productClicks.push(products[i].clicks);
  }
  return productClicks;
  console.log('All Product Clicks: ' + productClicks);
}

function allProductNames(products){
  var productNames = [];

  for (var i = 0; i < products.length; i++) {
    productNames.push(products[i].name);
  }
  return productNames;
  console.log('All Product Names: ' + productNames);
}

var clickData = allProductClicks(allProducts);
var nameData = allProductNames(allProducts);

var chartData = {
  type: 'bar',
  data: {
    labels: nameData,
    datasets: [{
      label: '# of Votes / Color',
      data: clickData,
      backgroundColor: labelColors
    }],
  },
  options: {
    scales: {
      yAxes: [{
        ticks: {
          beginAtZero: true
        }
      }]
    }
  }
};

// chartData.options.scales.yAxes[0].ticks.beginAtZero = true.
var myChart = new Chart(context, chartData);
