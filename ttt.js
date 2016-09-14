'use strict'

//ensure doc is ready

$(function(){
  var turn = 0;

  $('.square').on('click', function() {

    var self = $(this);

//this calls on the square. dom element in which the event occured!!
   if ( self.text() === ' ' ) {
     if ( turn % 2 === 0 ){
       self.text('X');
     } else {
        self.text('O');
    }

    turn++;
  } else {
    alert("I'm sorry");
  }

  });

});
