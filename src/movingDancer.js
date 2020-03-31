var MovingDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  // var blinkyDancer = Dancer(top, left, timeBetweenSteps);
  this.$node.addClass('moving');
};
  // we plan to overwrite the step function below, but we still want the superclass step behavior to work,
  // so we must keep a copy of the old version of this function


MovingDancer.prototype = Object.create(Dancer.prototype);
MovingDancer.prototype.constructor = MovingDancer;

// call the old version of step at the beginning of any call to this new version of step
let counter = 0;
MovingDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  //  toggle() is a jQuery method to show/hide the <span> tag.
  // See http://api.jquery.com/category/effects/ for this and
  // other effects you can use on a jQuery-wrapped html tag.
  counter ++;
  this.$node.animate({
    left: "+=500",
//    height: "toggle"
  }, 5000);
};