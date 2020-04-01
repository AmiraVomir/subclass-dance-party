// Creates and returns a new dancer object that can step
var Dancer = function(top, left, timeBetweenSteps) {

  // use jQuery to create an HTML <span> tag
  this.$node = $('<span class="dancer"></span>');

  // this.makeDancer = {};

  this.top = top;
  this.left = left;
  this.timeBetweenSteps = timeBetweenSteps;
  this.setPosition(top, left);
  this.step();
};

// the basic dancer doesn't do anything interesting at all on each step,
// it just schedules the next step
Dancer.prototype.step = function() {
  let self = this;
  setTimeout(function() { self.step(); }, this.timeBetweenSteps);
};

// Use css top and left properties to position our <span> tag
// where it belongs on the page. See http://api.jquery.com/css/
Dancer.prototype.setPosition = function(top, left) {
  var styleSettings = {
    top: top,
    left: left
  };
  this.$node.css(styleSettings);
};

Dancer.prototype.lineUp = function(value) {
  this.$node.stop();
  this.setPosition(value, 50);
};

Dancer.prototype.changeColor = function() {
  var red = Math.floor(Math.random() * 255);
  var green = Math.floor(Math.random() * 255);
  var blue = Math.floor(Math.random() * 255);
  var rgba = 'rgba(' + red + ',' + green + ',' + blue + ',1)';
  this.$node.css({'border-color': rgba});
};