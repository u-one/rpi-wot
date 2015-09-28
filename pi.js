
var gpio = require('node-gpio');
var GPIO = gpio.GPIO;
var PWM = gpio.PWM;

var motor = new PWM("28");
var speed = 50; // 0-100

var initialize = function() {
motor.open();
motor.frequency = 100;
motor.dutyCycle = speed;
motor.start();
motor.stop();
};

module.exports = {initialize: initialize};

