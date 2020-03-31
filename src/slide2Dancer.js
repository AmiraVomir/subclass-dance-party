var Slide2Dancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
    this.$node.addClass('slide2');
};

Slide2Dancer.prototype = Object.create(Dancer.prototype);
Slide2Dancer.prototype.constructor = Slide2Dancer;

Slide2Dancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};