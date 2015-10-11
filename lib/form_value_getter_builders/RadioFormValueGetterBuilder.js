var BaseGetterBuilder = require("./BaseGetterBuilder");
var util = require("util");

function RadioFormValueGetterBuilder() {}

util.inherits(RadioFormValueGetterBuilder, BaseGetterBuilder);

RadioFormValueGetterBuilder.prototype.build = function (className, $rootEL) {

    if (!$rootEL) {
        $rootEL = $(document);
    }

    return function () {
        return $rootEL.find("input[class=" + className +"]:checked").val();
    }
};

module.exports = RadioFormValueGetterBuilder;