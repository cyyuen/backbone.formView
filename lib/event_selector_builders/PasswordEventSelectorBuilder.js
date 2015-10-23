var util = require('util');
var KeyupEventSelectorBuilder = require('./KeyupEventSelectorBuilder');

function PasswordEventSelectorBuilder() {}

util.inherits(PasswordEventSelectorBuilder, KeyupEventSelectorBuilder);

module.exports = PasswordEventSelectorBuilder;
