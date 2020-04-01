var SlideDancer = function(top, left, timeBetweenSteps) {
  Dancer.call(this, top, left, timeBetweenSteps);
  this.$node.addClass('slide');
  this.timeBetweenSteps = 2000;
};

SlideDancer.prototype = Object.create(Dancer.prototype);
SlideDancer.prototype.constructor = SlideDancer;

SlideDancer.prototype.step = function() {
  Dancer.prototype.step.call(this);
  this.changeColor();
  let number1 = Math.floor(Math.random() * (500 - -500) + -500);
  let number2 = Math.floor(Math.random() * (500 - -500) + -500);
  this.$node.animate({
    left: '+=' + number1,
    top: '+=' + number2,
  }, 2000);
  // $('.slide').mouseover(function() {
  //   $('.slide').css('transform', 'translateX(300px)')
  //     .css('transition', 'all 1s ease-in');
  // }); //works using mouseover
};