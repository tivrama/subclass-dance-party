
var MakeDancer = function(top, left, timeBetweenSteps){

  this.$node = $('<span class="dancer"></span>');

  // console.log('this.step inside Make Dancer, ', this.step.bind(MakeDancer.prototype.step))
  // console.log('this.prototype, ', MakeDancer.prototype.step);

  this.stepTime = timeBetweenSteps; //experiment with set timeout
  //console.log(this.setPosition(500,100), 'set position');
  this.setPosition(top, left);
  this.step();//this.firstStep();
};



  // use jQuery to create an HTML <span> tag


  MakeDancer.prototype.step = function(){ //MakeDancer.prototype.firstStep = function(){
    // the basic dancer doesn't do anything interesting at all on each step,
    // it just schedules the next step
    var context = this;

    // var timedStep = MakeBlinkyDancer.prototype.step.call(this); //Change method name works, but fails test
    //window.setTimeout(this.step.bind(this), this.stepTime); //works but doesn't pass test
    // window.setTimeout(function(){context.step()}, this.stepTime);
    window.setTimeout(function(){context.step.call(context)}, context.stepTime);
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
