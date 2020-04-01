var JumpyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('jumpy');
};

JumpyDancer.prototype = Object.create(Dancer.prototype);
JumpyDancer.prototype.constructor = JumpyDancer;

JumpyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.changeColor();
};