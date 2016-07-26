"use strict";
var React = require("react");
var ReactDom = require("react-dom");
var SPScript_1 = require("./SPScript");
function processResults(data) {
    if (data && data.d && data.d.results) {
        alert(data.d.results.length + ' data entries returned');
    }
    else if (data && data.length > 0) {
        alert(data.length + ' items returned');
        data.map(function (item, i, arr) { console.log("Item " + i + " has title " + item.Title); });
    }
    //console.log(JSON.stringify(data));
}
window.onload = function () {
    //console.log("In here with "+  JSON.stringify(_spPageContextInfo));
    var dao = new SPScript_1.RestDao(_spPageContextInfo.webAbsoluteUrl);
    var contactsList = dao.lists("Contacts");
    contactsList.getItems().then(processResults);
    ReactDom.render(React.createElement("div", null, "Here is react getting contact list items"), document.querySelector("#reactContent"));
};

//# sourceMappingURL=app.js.map
