InputTextEventSelectorBuilder = require('./InputTextEventSelectorBuilder');
PasswordEventSelectorBuilder = require('./PasswordEventSelectorBuilder');
RadioEventSelectorBuilder = require('./RadioEventSelectorBuilder');
SelectEventSelectorBuilder = require('./SelectEventSelectorBuilder');

EventSelectorBuilderFactory = {
    get: function (inputType) {
        switch (inputType) {
            case "text": return new InputTextEventSelectorBuilder();
            case "password": return new PasswordEventSelectorBuilder();
            case "radio": return new RadioEventSelectorBuilder();
            case "select": return new SelectEventSelectorBuilder();
        }
    }
};

module.exports = EventSelectorBuilderFactory;