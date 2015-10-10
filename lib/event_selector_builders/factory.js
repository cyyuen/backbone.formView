InputTextEventSelectorBuilder = require('./InputTextEventSelectorBuilder');

EventSelectorBuilderFactory = {
    get: function (inputType) {
        switch (inputType) {
            case "text": return new InputTextEventSelectorBuilder();
        }
    }
};

module.exports = EventSelectorBuilderFactory;