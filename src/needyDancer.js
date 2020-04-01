var NeedyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('needy');
};

NeedyDancer.prototype = Object.create(Dancer.prototype);
NeedyDancer.prototype.constructor = NeedyDancer;

NeedyDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.changeColor();
  this.attach();
};

NeedyDancer.prototype.attach = function() {
  let n = window.dancers.length;
  let leftTotal = 0;
  let topTotal = 0;
  for (var i = 0; i < window.dancers.length; i++) {
    let currentDancer = window.dancers[i];
    leftTotal += currentDancer.left;
    topTotal += currentDancer.top;
  }
  this.left = leftTotal / n;
  this.top = topTotal / n;
  this.setPosition(this.top, this.left);
};