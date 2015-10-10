var InputTextFormValueGetterBuilder = require('./InputTextFormValueGetterBuilder');

FromValueGetterBuilderFactory = {
    get: function (inputType) {
        switch (inputType) {
            case "text": return new InputTextFormValueGetterBuilder();
        }
    }
};

module.exports = FromValueGetterBuilderFactory;

