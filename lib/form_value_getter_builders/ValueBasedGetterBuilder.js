var BaseGetterBuilder = require('./BaseGetterBuilder');
var util = require('util');

function ValueBasedGetterBuilder() {}

util.inherits(ValueBasedGetterBuilder, BaseGetterBuilder);

ValueBasedGetterBuilder.prototype.build = function (className, $rootEL) {

    var $el = $rootEL || $(document);

    return function () {
        return $el.find('.' + className).val();
    };

};

module.exports = ValueBasedGetterBuilder;
