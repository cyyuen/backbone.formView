InputTextEventSelectorBuilder = require('./InputTextEventSelectorBuilder');
PasswordEventSelectorBuilder = require('./PasswordEventSelectorBuilder');
RadioEventSelectorBuilder = require('./RadioEventSelectorBuilder');

EventSelectorBuilderFactory = {
    get: function (inputType) {
        switch (inputType) {
            case "text": return new InputTextEventSelectorBuilder();
            case "password": return new PasswordEventSelectorBuilder();
            case "radio": return new RadioEventSelectorBuilder();
        }
    }
};

module.exports = EventSelectorBuilderFactory;