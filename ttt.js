'use strict'

//ensure doc is ready

$(function(){
  var turn = 0;


  $('.square').on('click', function() {
    markSquare(this)
    checkWinner()
  });


  function markSquare(square) {


    var self = $(square);

    // how you store a state:

    // self.data('position');

//this calls on the square. dom element in which the event occured!!
   if ( self.text() === ' ' ) {
     if ( turn % 2 === 0 ){
       self.text('X');
         self.addClass("x");
     } else {
        self.text('O');
          self.addClass("o");
    }

    turn++;
  } else {
    alert("I'm sorry");
  }

    console.log("mark class");

  }


      function checkWinner(){

        if ($('.top').children().hasClass("x")) {

          console.log("check winner");



      }

    }






});
