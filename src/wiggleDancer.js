var MakeWiggleDancer = function(top, left, timeBetweenSteps){
  // var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);
  MakeDancer.call(this, top, left, timeBetweenSteps);
  this.wiggle = true;
  console.log(this.wiggle); 
  this.$node.addClass('wiggle');  
  // console.log(this);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //Make a copy of MakeDancer.step
  //MakeDancer.prototype.step;
  // this.oldStep = this.step;

  

};
MakeWiggleDancer.prototype = Object.create(MakeDancer.prototype);
MakeWiggleDancer.prototype.constructor = MakeWiggleDancer

MakeWiggleDancer.prototype.step = function(){
  MakeDancer.prototype.step.call(this);
  //check if dancer has wiggled
  if(this.wiggle) {
    console.log('left');
    this.$node.animate({left: '+=5', top: '+=5'}, 100);
    this.wiggle = false;
  }
  else {
    console.log('right');
    this.$node.animate({left: '-=5', top: '-=5'}, 100);
    this.wiggle = true;
  }


  };



