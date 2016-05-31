(function(){
  'use strict';

  function displayHexClock() {
      // Get the current time
      var clock = new Date(),
          h = clock.getHours(),
          m = clock.getMinutes(),
          s = clock.getSeconds();

      // Make sure that hours, minutes, and seconds are all 2 digits each
      if(h.toString().length < 2) { h = '0' + h; }
      if(m.toString().length < 2) { m = '0' + m; }
      if(s.toString().length < 2) { s = '0' + s; }

      var time = h + ':' + m + ':' + s;

      // Change the background color to the hex color of the current time


      // Update the current time
      document.getElementById('time').innerHTML = time;

      // Update the current hex value

    }


    window.onload = function() {
      // Update the clock every second
      displayHexClock();
      setInterval(displayHexClock, 1000);
    };

// Toggle backgroundColor HELP
// Use onClick for this one?
//     toggle_color("#61beb3", "#90a2c6", 4000, 2000);
//
//         function toggle_color(color1, color2, cycle_time, wait_time) {
//
//            setInterval(function first_color() {
//                document.body.style.backgroundColor = color1;
//                setTimeout(change_color, wait_time);
//            }, cycle_time);
//
//            function change_color() {
//                document.body.style.backgroundColor = color2;
//            }


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
