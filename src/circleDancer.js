var MakeCircleDancer = function(top, left, timeBetweenSteps) {
	MakeDancer.call(this, top, left, 50);
	this.$node.addClass('circle');

  this.x = true;
  this.y = true;
};

MakeCircleDancer.prototype = Object.create(MakeDancer.prototype);
MakeCircleDancer.prototype.constructor = MakeCircleDancer;

MakeCircleDancer.prototype.step = function() {
	MakeDancer.prototype.step.call(this);


  if(this.x && this.y) {
    this.$node.animate({left: '+=90'}, 100);
    this.x = false;
  }
  else if (!this.x && this.y){
    this.$node.animate({top: '+=90'}, 100);
    this.y = false;
  }
  else if (!this.x && !this.y) {
    this.$node.animate({left: '-=90'}, 100);
    this.x = true;
  }
  else if (this.x && !this.y){
    this.$node.animate({top: '-=90'}, 100);
    this.y = true;
  }

}



