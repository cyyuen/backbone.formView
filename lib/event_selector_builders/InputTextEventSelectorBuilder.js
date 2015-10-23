var util = require('util');
var KeyupEventSelectorBuilder = require('./KeyupEventSelectorBuilder');

function InputTextEventSelectorBuilder() {}

util.inherits(InputTextEventSelectorBuilder, KeyupEventSelectorBuilder);

module.exports = InputTextEventSelectorBuilder;
