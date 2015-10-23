var BaseGetterBuilder = require('./BaseGetterBuilder');
var util = require('util');

function RadioFormValueGetterBuilder() {}

util.inherits(RadioFormValueGetterBuilder, BaseGetterBuilder);

RadioFormValueGetterBuilder.prototype.build = function (className, $rootEL) {

    var $el = $rootEL || $(document);

    return function () {
        return $el.find('input[class=' + className +']:checked').val();
    };
};

module.exports = RadioFormValueGetterBuilder;
