var util = require('util');
var BaseEventSelectorBuilder = require('./BaseEventSelectorBuilder');

function RadioEventSelectorBuilder() {}

util.inherits(RadioEventSelectorBuilder, BaseEventSelectorBuilder);

RadioEventSelectorBuilder.prototype.build = function (className) {

    return "change input[class="+className+"]:radio";

};

module.exports = RadioEventSelectorBuilder;