(function e(t,n,r){function s(o,u){if(!n[o]){if(!t[o]){var a=typeof require=="function"&&require;if(!u&&a)return a(o,!0);if(i)return i(o,!0);var f=new Error("Cannot find module '"+o+"'");throw f.code="MODULE_NOT_FOUND",f}var l=n[o]={exports:{}};t[o][0].call(l.exports,function(e){var n=t[o][1][e];return s(n?n:e)},l,l.exports,e,t,n,r)}return n[o].exports}var i=typeof require=="function"&&require;for(var o=0;o<r.length;o++)s(r[o]);return s})({1:[function(require,module,exports){
(function (global){
"use strict";
var React = (typeof window !== "undefined" ? window['React'] : typeof global !== "undefined" ? global['React'] : null);
var ReactDom = (typeof window !== "undefined" ? window['ReactDOM'] : typeof global !== "undefined" ? global['ReactDOM'] : null);
var SPScript_1 = (typeof window !== "undefined" ? window['SPScript'] : typeof global !== "undefined" ? global['SPScript'] : null);
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



}).call(this,typeof global !== "undefined" ? global : typeof self !== "undefined" ? self : typeof window !== "undefined" ? window : {})

},{}]},{},[1])
//# sourceMappingURL=bundle-ReactRoadmap.js.map
