(function(){
  'use strict';

var time = setInterval(clock, 1000);

function clock() {
  function dateToContent(date) {
    return date.toTimeString().replace(/.*(\d{2}:\d{2}:\d{2}).*/, "$1");
  }
  var date = new Date();
  document.body.innerHTML = dateToContent(date);

}

  //Background color
// var wallpaper = setInterval (function () {
//   setColor() }, 1000);
//
// function setColor() {
//
//   }
//
//
//   });
// }

}());

// DEMOdocument.getElementById('title').textContent='New Title';
//
// document.querySelector('h1').textContent="My Cool Project";
//
// var mySuperCoolHeading = document.getElementById('title').textContent='New Title';
//
// alert(mySuperCoolHeading);
//
// var myNumberFive = 5;
//
// var myCoolString = 'This is a string';
//
// alert(myNumberFive+ " "+ myCoolString);
//
// console.log(myCoolString);
//
// function myCoolCalc(number1, number2) {
//   var sum = number1 + number2;
//   console.log(sum);
// }
// myCoolCalc(1, 3);
