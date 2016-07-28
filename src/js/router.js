"use strict";
var React = require("react");
var react_router_1 = require("react-router");
var data_list_container_1 = require("./containers/data-list-container");
var simple_barchart_container_1 = require("./containers/simple-barchart-container");
var Navigation = function () { return (React.createElement("div", null, React.createElement("div", null, React.createElement(react_router_1.Link, {to: "/"}, "Home")), React.createElement("div", null, React.createElement(react_router_1.Link, {to: "/simplebarchart"}, "Simple bar chart")))); };
var ContentContainer = function () { return (React.createElement("div", null, React.createElement(Navigation, null))); };
var PageNotFound = function () { return React.createElement("h1", null, "Could not find this page"); };
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = (React.createElement(react_router_1.Router, null, React.createElement(react_router_1.Route, {path: "/", component: ContentContainer}, React.createElement(react_router_1.IndexRoute, {component: data_list_container_1.default}), React.createElement(react_router_1.Route, {path: "simplebarchart", component: simple_barchart_container_1.default}), React.createElement(react_router_1.Route, {path: "*", component: PageNotFound}))));

//# sourceMappingURL=router.js.map
