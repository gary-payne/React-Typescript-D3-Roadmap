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
    //NOTE - React-router parsing by TypeScript fails if an isRequired property is defined!! 
    //This style of declaration is necessary for the compiler to find React.PropTypes definitions!
    //static propTypes = { listName: React.PropTypes.string.isRequired };
    //static defaultProps = { listName: "Some List Name" };
    function DataListContainer(props) {
        var _this = this;
        _super.call(this, props);
        this.state = {
            data: []
        };
        var dao = new SPScript_1.RestDao(_spPageContextInfo.webAbsoluteUrl);
        var dataList = dao.lists("TestData"); //this.props.listName);
        dataList.getItems().then(function (results) { _this.setState({ data: results }); });
    }
    DataListContainer.prototype.render = function () {
        return (React.createElement(data_list_1.default, {className: "sometestclass", data: this.state.data}));
    };
    return DataListContainer;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataListContainer;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../views/data-list":4}],2:[function(require,module,exports){
(function (global){
"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var SPScript_1 = (typeof window !== "undefined" ? window['SPScript'] : typeof global !== "undefined" ? global['SPScript'] : null);
var d3 = (typeof window !== "undefined" ? window['d3'] : typeof global !== "undefined" ? global['d3'] : null);
var Simple_Barchart_1 = require("../views/Simple-Barchart");
var SimpleBarchartContainer = (function (_super) {
    __extends(SimpleBarchartContainer, _super);
    //NOTE - React-router parsing by TypeScript fails if an isRequired property is defined!! 
    //static propTypes = { listName: React.PropTypes.string.isRequired };
    function SimpleBarchartContainer(props) {
        _super.call(this, props);
        this.state = {};
        var dao = new SPScript_1.RestDao(_spPageContextInfo.webAbsoluteUrl);
        var dataList = dao.lists("TestData"); //this.props.listName);
        dataList.getItems().then(this.processResults);
    }
    SimpleBarchartContainer.prototype.processResults = function (data) {
        if (data && data.d && data.d.results) {
        }
        else if (data && data.length > 0) {
            //alert(data.length + ' items returned');
            data.map(function (item, i, arr) { console.log("Item " + i + " has title " + item.Title); });
            //const chartdata = [2.13, 4, 5.23, 1.234, 9.9, 11.1, 13, 2.5, 1.1, 6.6, 10, 3];
            var chartdata = data.map(function (item) { return item.ANumber; });
            this.firstD3Test(chartdata);
        }
        //console.log(JSON.stringify(data));
    };
    SimpleBarchartContainer.prototype.firstD3Test = function (data) {
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
    };
    SimpleBarchartContainer.prototype.render = function () {
        return (React.createElement(Simple_Barchart_1.default, null));
    };
    return SimpleBarchartContainer;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = SimpleBarchartContainer;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"../views/Simple-Barchart":5}],3:[function(require,module,exports){
(function (global){
"use strict";
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var react_router_1 = (typeof window !== "undefined" ? window['ReactRouter'] : typeof global !== "undefined" ? global['ReactRouter'] : null);
var data_list_container_1 = require("./containers/data-list-container");
var simple_barchart_container_1 = require("./containers/simple-barchart-container");
var Navigation = function () { return (React.createElement("div", null, React.createElement("div", null, React.createElement(react_router_1.Link, {to: "/"}, "Home")), React.createElement("div", null, React.createElement(react_router_1.Link, {to: "/simplebarchart"}, "Simple bar chart")))); };
var ContentContainer = function () { return (React.createElement("div", null, React.createElement(Navigation, null))); };
var PageNotFound = function () { return React.createElement("h1", null, "Could not find this page"); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (React.createElement(react_router_1.Router, null, React.createElement(react_router_1.Route, {path: "/", component: ContentContainer}, React.createElement(react_router_1.IndexRoute, {component: data_list_container_1.default}), React.createElement(react_router_1.Route, {path: "simplebarchart", component: simple_barchart_container_1.default}), React.createElement(react_router_1.Route, {path: "*", component: PageNotFound}))));



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./containers/data-list-container":1,"./containers/simple-barchart-container":2}],4:[function(require,module,exports){
(function (global){
"use strict";
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
//A statless functional component
function default_1(props) {
    return (React.createElement("div", null, React.createElement("div", null, "The raw data:"), React.createElement("ul", {className: "data-list"}, props.data.map(function (listItem) {
        return (React.createElement("li", {key: listItem.Id}, listItem.Title, " = ", (typeof listItem.ANumber === "undefined") ? "null" : listItem.ANumber));
    }))));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],5:[function(require,module,exports){
(function (global){
"use strict";
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
//A statless functional component
function default_1(props) {
    return (React.createElement("span", null));
}
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = default_1;



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}],6:[function(require,module,exports){
(function (global){
"use strict";
var ReactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var router_1 = require("./router");
window.onload = function () {
    ReactDom.render(router_1.default, document.querySelector("#reactContent"));
};



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{"./router":3}]},{},[6])
//# sourceMappingURL=bundle-ReactRoadmap.js.map
