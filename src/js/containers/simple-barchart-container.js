"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SPScript_1 = require("SPScript");
var d3 = require('d3');
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

//# sourceMappingURL=simple-barchart-container.js.map
