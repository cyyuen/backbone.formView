DataParserFactory = {
    get: function (dataType) {
        switch (dataType) {
            case "int":
                return parseInt;
            case "float":
                return parseFloat;
            case "bool":
                return function (v) {return v === "true"; };
            default:
                return function (v) { return v };
        }
    }
};

module.exports = DataParserFactory;