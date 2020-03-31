var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('slide');
};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  let number1 = Math.floor(Math.random() * (500 - -500) + -500);
  let number2 = Math.floor(Math.random() * (500 - -500) + -500);
  this.$node.animate({
    left: '+=' + number1,
    top: '+=' + number2,
  }, 2000);
};