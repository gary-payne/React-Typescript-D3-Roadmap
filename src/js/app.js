"use strict";
var React = require("react");
var ReactDom = require("react-dom");
var d3 = require('d3');
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

//# sourceMappingURL=app.js.map
