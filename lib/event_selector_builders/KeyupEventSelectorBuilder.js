var util = require('util');
var BaseEventSelectorBuilder = require('./BaseEventSelectorBuilder');

function KeyupEventSelectorBuilder() {}

util.inherits(KeyupEventSelectorBuilder, BaseEventSelectorBuilder);

KeyupEventSelectorBuilder.prototype.build = function (className) {

    return 'keyup .' + className;

};

module.exports = KeyupEventSelectorBuilder;
