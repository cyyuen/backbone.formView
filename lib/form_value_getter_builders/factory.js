var InputTextFormValueGetterBuilder = require('./InputTextFormValueGetterBuilder');
var PasswordFormValueGetterBuilder = require('./PasswordFormValueGetterBuilder');
var RadioFormValueGetterBuilder = require('./RadioFormValueGetterBuilder');

FromValueGetterBuilderFactory = {
    get: function (inputType) {
        switch (inputType) {
            case "text": return new InputTextFormValueGetterBuilder();
            case "password": return new PasswordFormValueGetterBuilder();
            case "radio": return new RadioFormValueGetterBuilder()
        }
    }
};

module.exports = FromValueGetterBuilderFactory;

