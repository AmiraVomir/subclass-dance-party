var NeedyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('needy');
};

NeedyDancer.prototype = Object.create(Dancer.prototype);
NeedyDancer.prototype.constructor = NeedyDancer;

NeedyDancer.prototype.step = function() {
  this.attach();
  Dancer.prototype.step.call(this);
};

NeedyDancer.prototype.attach = function() {
  let n = window.dancers.length;
  let leftAvg = 0;
  let topAvg = 0;
  for (const dancer of window.dancers) {
    leftAvg += dancer.left;
    topAvg += dancer.top;
  }
  this.left = leftAvg / n;
  this.top = topAvg / n;
  this.setPosition(this.left, this.top);
};