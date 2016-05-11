var lineUp = function() {
  for (var i = 0; i < dancers.length; i++) {
    console.log('line up')
    //var $dancer = dancers[i].$node;
    if (dancers[i].$node.hasClass('wiggle')) {
      //var oldStepTime = dancers[i].stepTime;
      //dancers[i].stepTime = 2000;
      dancers[i].setPosition(dancers.top, '50%');
      //dancers[i].stepTime = oldStepTime;


    }
  }
 }