
var MakeDancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  this.step();
  this.setPosition(top, left);
  //this.stepTime = timeBetweenSteps; experiment with set timeout
};


  // var dancer = {}; dont need this

  // use jQuery to create an HTML <span> tag


  MakeDancer.prototype.step = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var context = this;
    // var callMethod = function() {
    //   context.step();
    // }
    window.setTimeout(context.step, context.timeBetweenSteps);
    //this.step;
  };

  MakeDancer.prototype.setPosition = function(top, left){
    // Use css top and left properties to position our <span> tag
    // where it belongs on the page. See http://api.jquery.com/css/
    //
    var styleSettings = {
      top: top,
      left: left
    };
    this.$node.css(styleSettings);
  };

  // now that we have defined the dancer object, we can start setting up important parts of it by calling the methods we wrote
  // this one sets the position to some random default point within the body

  // return dancer;
