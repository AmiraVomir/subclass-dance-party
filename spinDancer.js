var SpinDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.colorWheel = ['yellow', 'green', 'blue'];
  // this.$node.addClass('spin');
};

SpinDancer.prototype = Object.create(Dancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function() {
  let self = this;
  Dancer.prototype.step.call(this);
  let currentColor = Math.floor(Math.random() * 3);
  this.$node.animate({'background-color': self.colorWheel[currentColor]});
};