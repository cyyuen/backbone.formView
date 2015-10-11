var InputTextFormValueGetterBuilder = require('./InputTextFormValueGetterBuilder');
var PasswordFormValueGetterBuilder = require('./PasswordFormValueGetterBuilder');

FromValueGetterBuilderFactory = {
    get: function (inputType) {
        switch (inputType) {
            case "text": return new InputTextFormValueGetterBuilder();
            case "password": return new PasswordFormValueGetterBuilder();
        }
    }
};

module.exports = FromValueGetterBuilderFactory;

