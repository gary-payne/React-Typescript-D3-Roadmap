(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var SPScript_1 = (typeof window !== "undefined" ? window['SPScript'] : typeof global !== "undefined" ? global['SPScript'] : null);
var data_list_1 = require("../views/data-list");
var DataListContainer = (function (_super) {
    __extends(DataListContainer, _super);
    function DataListContainer(props) {
        var _this = this;
        _super.call(this, props);
        this.state = {
            data: []
        };
        var dao = new SPScript_1.RestDao(_spPageContextInfo.webAbsoluteUrl);
        var dataList = dao.lists("TestData");
        dataList.getItems().then(function (results) { _this.setState({ data: results }); });
    }
    DataListContainer.prototype.render = function () {
        return (React.createElement(data_list_1.default, {data: this.state.data}));
    };
    return DataListContainer;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataListContainer;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../views/data-list":2}],2:[function(require,module,exports){
(function (global){
"use strict";
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
//A statless functional component
function default_1(props) {
    return (React.createElement("ul", {className: "data-list"}, props.data.map(function (listItem) {
        return (React.createElement("li", {key: listItem.Id}, listItem.Title, " = ", (typeof listItem.ANumber === "undefined") ? "null" : listItem.ANumber));
    })));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],3:[function(require,module,exports){
(function (global){
"use strict";
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var d3 = (typeof window !== "undefined" ? window['d3'] : typeof global !== "undefined" ? global['d3'] : null);
var data_list_container_1 = require("./containers/data-list-container");
function processResults(data) {
    if (data && data.d && data.d.results) {
    }
    else if (data && data.length > 0) {
        //alert(data.length + ' items returned');
        data.map(function (item, i, arr) { console.log("Item " + i + " has title " + item.Title); });
        //const chartdata = [2.13, 4, 5.23, 1.234, 9.9, 11.1, 13, 2.5, 1.1, 6.6, 10, 3];
        var chartdata = data.map(function (item) { return item.ANumber; });
        firstD3Test(chartdata);
    }
    //console.log(JSON.stringify(data));
}
function firstD3Test(data) {
    var size = {
        width: 500,
        height: 200,
        barPadding: 2
    };
    var svg = d3.select("#chart")
        .append("svg")
        .attr("id", "testbarchart")
        .attr("height", size.height)
        .attr("width", size.width);
    svg.selectAll('rect')
        .data(data)
        .enter()
        .append("rect")
        .attr("x", function (d, i) { return i * (size.width / data.length); })
        .attr("y", function (d) { return size.height - ((d / d3.max(data)) * size.height); })
        .attr("width", function () { return (size.width / data.length) - size.barPadding; })
        .attr("height", function (d) { return (d / d3.max(data)) * size.height; })
        .style("fill", function (d) { return "rgb(0, " + (d * 20) + ",0)"; });
}
window.onload = function () {
    //const dao = new RestDao(_spPageContextInfo.webAbsoluteUrl);
    //const dataList = dao.lists("TestData");
    //dataList.getItems().then(processResults);
    //ReactDom.render(<div>Here is react getting contact list items</div>, document.querySelector("#reactContent"));
    ReactDom.render(React.createElement(data_list_container_1.default, null), document.querySelector("#reactContent"));
};



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./containers/data-list-container":1}]},{},[3])
//# sourceMappingURL=bundle-ReactRoadmap.js.map
