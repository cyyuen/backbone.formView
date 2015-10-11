var RadioFormValueGetterBuilder = require('./RadioFormValueGetterBuilder');
var ValueBasedGetterBuilder = require('./ValueBasedGetterBuilder');

FromValueGetterBuilderFactory = {
    get: function (inputType) {
        switch (inputType) {
            case "text":
            case "password":
            case "select": return new ValueBasedGetterBuilder();
            case "radio": return new RadioFormValueGetterBuilder();
        }
    }
};

module.exports = FromValueGetterBuilderFactory;

