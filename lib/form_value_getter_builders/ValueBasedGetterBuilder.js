var BaseGetterBuilder = require("./BaseGetterBuilder");
var util = require("util");

function ValueBasedGetterBuilder() {}

util.inherits(ValueBasedGetterBuilder, BaseGetterBuilder);

ValueBasedGetterBuilder.prototype.build = function (className, $rootEL) {

    if (!$rootEL) {
        $rootEL = $(document);
    }

    return function () {
        return $rootEL.find("." + className).val();
    }

};

module.exports = ValueBasedGetterBuilder;