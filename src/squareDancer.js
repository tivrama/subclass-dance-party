var MakeSquareDancer = function(top, left, timeBetweenSteps) {
  MakeDancer.call(this, top, left, timeBetweenSteps);

  this.x = true;
  this.y = true;
  this.$node.addClass('square');

}

MakeSquareDancer.prototype = Object.create(MakeDancer.prototype);
MakeSquareDancer.prototype.constructor = MakeSquareDancer;

MakeSquareDancer.prototype.step = function() {
MakeDancer.prototype.step.call(this);

  if(this.x && this.y) {
    this.$node.animate({left: '+=30'}, 100);
    this.x = false;
  }
  else if (!this.x && this.y){
    this.$node.animate({top: '+=30'}, 100);
    this.y = false;
  }
  else if (!this.x && !this.y) {
    this.$node.animate({left: '-=30'}, 100);
    this.x = true;
  }
  else if (this.x && !this.y){
    this.$node.animate({top: '-=30'}, 100);
    this.y = true;
  }


}