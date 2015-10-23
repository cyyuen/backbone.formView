var RadioFormValueGetterBuilder = require('./RadioFormValueGetterBuilder');
var ValueBasedGetterBuilder = require('./ValueBasedGetterBuilder');

var FromValueGetterBuilderFactory = {
    get: function (inputType) {
        switch (inputType) {
            case 'text':
            case 'password':
            case 'textarea':
            case 'select': return new ValueBasedGetterBuilder();
            case 'radio': return new RadioFormValueGetterBuilder();
            default : return new ValueBasedGetterBuilder();
        }
    },
};

module.exports = FromValueGetterBuilderFactory;

