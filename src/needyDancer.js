var NeedyDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('needy');
  this.top = 50%;
  this.left = 50%;
};

NeedyDancer.prototype = Object.create(Dancer.prototype);
NeedyDancer.prototype.constructor = NeedyDancer;

NeedyDancer.prototype.step = function() {
  this.attach();
  Dancer.prototype.step.call(this);
};

NeedyDancer.prototype.attach = function() {
  let n = window.dancers.length;
  console.log(n)
  let leftTotal = 0;
  let topTotal = 0;
  for (var i = 0; i < window.dancers.length; i++) {
    let currentDancer = window.dancers[i];
    leftTotal += currentDancer.left;
    topTotal += currentDancer.top
  }
  this.left = leftTotal / n;
  this.top = topTotal /  n;
  this.setPosition(this.top, this.left);
};