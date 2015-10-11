RadioEventSelectorBuilder = require('./RadioEventSelectorBuilder');
SelectEventSelectorBuilder = require('./SelectEventSelectorBuilder');
KeyupEventSelectorBuilder = require('./KeyupEventSelectorBuilder');

EventSelectorBuilderFactory = {
    get: function (inputType) {
        switch (inputType) {
            case "text":
            case "password":
            case "textarea": return new KeyupEventSelectorBuilder();
            case "radio": return new RadioEventSelectorBuilder();
            case "select": return new SelectEventSelectorBuilder();
        }
    }
};

module.exports = EventSelectorBuilderFactory;