'use strict'

//ensure doc is ready

$(function(){
  var turn = 0;


  $('.square').on('click', function() {



    var self = $(this);

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

  });

  $('.square').click ( function() {checkWinner() });

      var self = $(this);

      function checkWinner(){

      }






});
