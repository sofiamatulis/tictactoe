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

    // console.log("mark class");

  }


      function checkWinner(){

        if (($('.top .right').hasClass("x") && $('.top .center').hasClass("x") && $('.top .left').hasClass("x"))) {

                  alert("X is the Winner");

        }

       else if
      (($('.top .right').hasClass("x") && $('.middle .right').hasClass("x") && $('.bottom .right').hasClass("x"))) {

                alert("X is the Winner");

      }

    else if
    (($('.bottom .right').hasClass("x") && $('.bottom .center').hasClass("x") && $('.bottom .left').hasClass("x"))) {

              alert("X is the Winner");

    }

else if
  (($('.top .left').hasClass("x") && $('.middle .left').hasClass("x") && $('.bottom .left').hasClass("x"))) {

            alert("X is the Winner");

}

else if
  (($('.top .left').hasClass("x") && $('.middle .center').hasClass("x") && $('.bottom .right').hasClass("x"))) {

            alert("X is the Winner");

}

else if
  (($('.bottom .left').hasClass("x") && $('.middle .center').hasClass("x") && $('.top.right').hasClass("x"))) {

            alert("X is the Winner");

}






    }






});
