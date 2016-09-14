'use strict'


//ensure doc is ready

$(function(){
  var turn = 0;

  $('.square').on('click',function() {

//this calls on the square. dom element in which the event occured!!
    if (turn % 2 ===0){
    $(this).text('X'); }
    else {
        $(this).text('O');

    }

    turn++;

  



  });

});
