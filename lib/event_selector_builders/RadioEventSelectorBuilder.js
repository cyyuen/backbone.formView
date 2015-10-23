var util = require('util');
var OnChangeEventSelectorBuilder = require('./OnChangeEventSelectorBuilder');

function RadioEventSelectorBuilder() {}

util.inherits(RadioEventSelectorBuilder, OnChangeEventSelectorBuilder);

RadioEventSelectorBuilder.prototype.build = function (className) {

    return RadioEventSelectorBuilder.super_.prototype.build('input[class='+className+']:radio');

};

module.exports = RadioEventSelectorBuilder;
