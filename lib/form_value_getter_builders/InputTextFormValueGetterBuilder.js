var util = require('util');
var ValueBasedGetterBuilder = require('./ValueBasedGetterBuilder');

function InputTextFormValueGetterBuilder() {}

util.inherits(InputTextFormValueGetterBuilder, ValueBasedGetterBuilder);

module.exports = InputTextFormValueGetterBuilder;