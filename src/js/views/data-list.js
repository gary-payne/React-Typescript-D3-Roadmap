"use strict";
var React = require("react");
//A statless functional component
function default_1(props) {
    return (React.createElement("ul", {className: "data-list"}, props.data.map(function (listItem) {
        return (React.createElement("li", {key: listItem.Id}, listItem.Title, " = ", (typeof listItem.ANumber === "undefined") ? "null" : listItem.ANumber));
    })));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;

//# sourceMappingURL=data-list.js.map
