(function(){
  'use strict';

  var startButton = document.getElementById('start-button');
  var clearButton = document.getElementById('clear-button');
  var hours = document.querySelector('.hours');
  var minutes = document.querySelector('.minutes');
  var seconds = document.querySelector('.seconds');
  var wallpaper = document.querySelector('.wrapper');

  var startTime;
  var currentText;

  console.log(startButton);

  function toggleButton(){
    currentText = startButton.textContent;

    if(currentText == 'Start'){
      startButton.textContent = 'Stop';
      startButton.style.backgroundColor = 'red';
    } else{
      startButton.textContent = 'Start';
      startButton.style.backgroundColor = 'green';
    }
  }

  function millisecondsToInterval(ms){
    var numMsInHour = 60000 * 60;
    var numMsInMinute = 60000;
    var numMsInSecond = 1000;

    var hourCount = Math.floor(ms / numMsInHour);
    var minuteCount = Math.floor(ms / numMsInMinute);
    var secondCount = Math.floor(ms / numMsInSecond);

    return [hourCount, minuteCount, secondCount];
  }

  function displayInterval(interval){
    hours.textContent = ("0" + interval[0]).slice(-2);
    minutes.textContent = ("0" + interval[1]).slice(-2);
    seconds.textContent = ("0" + interval[2]).slice(-2);
  }

  function logElapsedTime(){
    var currentTime = new Date();
    var elapsedTime = currentTime - startTime;
    var elasped = millisecondsToInterval(elapsedTime);

    displayInterval(elasped);
  }

  function startButtonHandler(){
    startTime = new Date();
    toggleButton();
    window.setInterval(logElapsedTime, 1000);
  }

  function clearButtonHandler(){
    clearInterval(startButtonHandler);
    }


  startButton.addEventListener('click', startButtonHandler);
  clearButton.addEventListener('click', clearButtonHandler);

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
