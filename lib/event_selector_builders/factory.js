InputTextEventSelectorBuilder = require('./InputTextEventSelectorBuilder');
PasswordEventSelectorBuilder = require('./PasswordEventSelectorBuilder');

EventSelectorBuilderFactory = {
    get: function (inputType) {
        switch (inputType) {
            case "text": return new InputTextEventSelectorBuilder();
            case "password": return new PasswordEventSelectorBuilder();
        }
    }
};

module.exports = EventSelectorBuilderFactory;