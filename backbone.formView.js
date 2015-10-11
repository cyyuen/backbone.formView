/**
 * Backbone FormView
 * Version 1.0.0
 *
 */
(function(root, factory) {

    // for CommonJS
    //if (typeof exports === 'object' && typeof require === 'function') {
    //    module.exports = factory(require('backbone'));
    //}
    // for AMD module
    if (typeof define === 'function' && define.amd) {
        define(["backbone"], function (Backbone) {

            return factory(Backbone || root.Backbone);

        });
    }
    // Browser
    else {
        factory(Backbone);
    }

} (this, function (Backbone){

    var DataParserFactory = require('./lib/data_parser/factory'),
        FormValueGetterBuilderFactory = require('./lib/form_value_getter_builders/factory'),
        EventSelectorBuilderFactory = require('./lib/event_selector_builders/factory');


    Backbone.FormView = Backbone.View.extend({

        /**
         * Prefix of the class name
         */
        classPrefix: "bf-",

        /**
         * @param {{inputType: string, dataType: string}} option.schema     the form schema
         */
        initialize: function (option) {

            // initialize schema if it is not exist
            this.schema || (this.schema = {});

            // initialize option's schema if it is not exist
            option.schema || (option.schema = {});

            // the input schema has higher priority
            _.extend(this.schema, option.schema);

            var schema = this.schema;

            var events = {};

            var self = this;

            _.each(schema, function (attr, name) {

                // get the event selector
                var eventSel = self._getEventSelector(name, attr.inputType);

                // get the model setter callback
                var eventCallback = self._getEventCallBack(name, attr.dataType, attr.inputType);

                // bind form change to model
                events[eventSel] = eventCallback;

            });

            // register all events
            this.delegateEvents(events);
        },

        /**
         * Get the class name of a attribute of model
         *
         * @param name
         * @returns {string}
         * @private
         */
        _classNameForAttr: function (name) {
            return this.classPrefix + name;
        },

        /**
         * Get the event selector by sel name and input type
         *
         * @param name
         * @param type
         * @private
         */
        _getEventSelector: function (name, type) {

            var eventSelectorBuilder = EventSelectorBuilderFactory.get(type);

            return eventSelectorBuilder.build(this._classNameForAttr(name));

        },

        /**
         * Get the setter function by model name and dataType.
         *
         * Model setter function would set the value to model.
         *
         * @param name
         * @param dataType
         * @returns {Function}
         * @private
         */
        _getModelSetterCallback: function (name, dataType) {

            var dataParser = DataParserFactory.get(dataType);

            var self = this;

            return function (value) {

                self.model.set(name, dataParser(value));

            }
        },

        /**
         * Get the value getter function based on the sel and input type.
         *
         * Value getter function would get the value from form using sel.
         *
         * @param name
         * @param type
         * @return {function():string}
         * @private
         */
        _getFormValueGetterFunction: function (name, type) {

            var className = this._classNameForAttr(name);

            var valueGetterBuilder = FormValueGetterBuilderFactory.get(type);

            return valueGetterBuilder.build(className, this.$el);

        },

        /**
         *
         *
         * @param name
         * @param dataType
         * @param type
         * @returns {Function}
         * @private
         */
        _getEventCallBack: function (name, dataType, type) {

            // getter function to get value from form
            var valueGetter = this._getFormValueGetterFunction(name, type);

            // setter function to set value to model
            var setterCallback = this._getModelSetterCallback(name, dataType);

            return function () {

                setterCallback(valueGetter());

            };
        }

    });

    return Backbone.FormView;

}));