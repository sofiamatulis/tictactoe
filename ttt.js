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

//now lets do the o side



  else if (($('.top .right').hasClass("o") && $('.top .center').hasClass("o") && $('.top .left').hasClass("o"))) {

            alert("O is the Winner");

  }

 else if
(($('.top .right').hasClass("o") && $('.middle .right').hasClass("o") && $('.bottom .right').hasClass("o"))) {

          alert("O is the Winner");

}

else if
(($('.bottom .right').hasClass("o") && $('.bottom .center').hasClass("o") && $('.bottom .left').hasClass("o"))) {

        alert("O is the Winner");

}

else if
(($('.top .left').hasClass("o") && $('.middle .left').hasClass("o") && $('.bottom .left').hasClass("o"))) {

      alert("O is the Winner");

}

else if
(($('.top .left').hasClass("o") && $('.middle .center').hasClass("o") && $('.bottom .right').hasClass("o"))) {

      alert("O is the Winner");

}

else if
(($('.bottom .left').hasClass("o") && $('.middle .center').hasClass("o") && $('.top.right').hasClass("o"))) {

      alert("O is the Winner");

}








    }

//or: 
 //    function checkWinner() {
 // if ( $('.top').children('.x').length === 3 ) {
 //   alert("winner!");
 //   }
 // else if ( $('.middle').children('.x').length === 3 ) {
 //   alert("winner!");
 //   }
 // else if ( $('.bottom').children('.x').length === 3 ) {
 //   alert("winner!");
 //   }
 // }






});
