var util = require('util');
var OnChangeEventSelectorBuilder = require('./OnChangeEventSelectorBuilder');

function SelectEventSelectorBuilder() {}

util.inherits(SelectEventSelectorBuilder, OnChangeEventSelectorBuilder);

SelectEventSelectorBuilder.prototype.build = function (className) {

    return SelectEventSelectorBuilder.super_.prototype.build('.'+className);

};

module.exports = SelectEventSelectorBuilder;
