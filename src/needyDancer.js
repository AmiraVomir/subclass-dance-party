var NeedyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('spin');
};

NeedyDancer.prototype = Object.create(Dancer.prototype);
NeedyDancer.prototype.constructor = NeedyDancer;

NeedyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
};

NeedyDancer.prototype.attach = function() {

};