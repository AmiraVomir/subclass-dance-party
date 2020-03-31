var SpinDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.colorWheel = ['yellow', 'green', 'blue'];
  this.$node.addClass('spin');
};

SpinDancer.prototype = Object.create(Dancer.prototype);
SpinDancer.prototype.constructor = SpinDancer;

SpinDancer.prototype.step = function() {
  // let self = this;
  Dancer.prototype.step.call(this);
  let color1 = Math.floor(Math.random() * 256);
  let color2 = Math.floor(Math.random() * 256);
  let color3 = Math.floor(Math.random() * 256);
  this.$node.css('background-color', 'rgb("+ color1 + ","+ color2 +", "+ color3 +")');
};