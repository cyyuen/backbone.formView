var RadioEventSelectorBuilder = require('./RadioEventSelectorBuilder');
var SelectEventSelectorBuilder = require('./SelectEventSelectorBuilder');
var KeyupEventSelectorBuilder = require('./KeyupEventSelectorBuilder');

var EventSelectorBuilderFactory = {
    get: function (inputType) {
        switch (inputType) {
            case 'text':
            case 'password':
            case 'textarea': return new KeyupEventSelectorBuilder();
            case 'radio': return new RadioEventSelectorBuilder();
            case 'select': return new SelectEventSelectorBuilder();
            default :
                return new KeyupEventSelectorBuilder();
        }
    },
};

module.exports = EventSelectorBuilderFactory;
