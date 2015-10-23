var util = require('util');
var BaseEventSelectorBuilder = require('./BaseEventSelectorBuilder');

function OnChangeEventSelectorBuilder() {}

util.inherits(OnChangeEventSelectorBuilder, BaseEventSelectorBuilder);

OnChangeEventSelectorBuilder.prototype.build = function (className) {

    return 'change ' + className;

};

module.exports = OnChangeEventSelectorBuilder;
