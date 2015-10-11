var util = require('util');
var ValueBasedGetterBuilder = require('./ValueBasedGetterBuilder');

function PasswordFormValueGetterBuilder() {}

util.inherits(PasswordFormValueGetterBuilder, ValueBasedGetterBuilder);

module.exports = PasswordFormValueGetterBuilder;