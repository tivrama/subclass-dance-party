var MakeBlinkyDancer = function(top, left, timeBetweenSteps){
  // var blinkyDancer = new MakeDancer(top, left, timeBetweenSteps);
  MakeDancer.call(this, top, left, timeBetweenSteps);
  // var oldStep = MakeDancer.prototype.step;   
  // console.log(this);
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function
  //Make a copy of MakeDancer.step
  //MakeDancer.prototype.step;
  // this.oldStep = this.step;

  

};
MakeBlinkyDancer.prototype = Object.create(MakeDancer.prototype);
MakeBlinkyDancer.prototype.constructor = MakeBlinkyDancer

MakeBlinkyDancer.prototype.step = function(){
    // call the old version of step at the beginning of any call to this new version of step
    // console.log('oldsStep: ', this.oldStep);
    MakeDancer.prototype.step.call(this);
    // this.step()//this.firstStep();
    // this.oldStep();
    // toggle() is a jQuery method to show/hide the <span> tag.
    // See http://api.jquery.com/category/effects/ for this and
    // other effects you can use on a jQuery-wrapped html tag.
    this.$node.toggle();
  };