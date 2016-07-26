"use strict";
var React = require("react");
var ReactDom = require("react-dom");
window.onload = function () {
    console.log("In here has changed");
    ReactDom.render(React.createElement("div", null, "Here is react!"), document.querySelector("#reactContent"));
};

//# sourceMappingURL=app.js.map
