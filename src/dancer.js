
var MakeDancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');
  this.firstStep();
  this.setPosition(top, left);
  this.stepTime = timeBetweenSteps; //experiment with set timeout
};


  // var dancer = {}; dont need this

  // use jQuery to create an HTML <span> tag


  MakeDancer.prototype.firstStep = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    // var context = this;
    // var callMethod = function() {
    //   context.step();
    // }
    console.log(this.stepTime);
    window.setTimeout(this.step.bind(this), this.stepTime);
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
