import * as React from "react";
import { RestDao } from "SPScript";
import * as d3 from 'd3';
import SimpleBarchart from "../views/Simple-Barchart";

class SimpleBarchartContainer extends React.Component<any, any> {

    //NOTE - React-router parsing by TypeScript fails if an isRequired property is defined!! 
    //static propTypes = { listName: React.PropTypes.string.isRequired };

    constructor(props){
        super(props);
        this.state = {
        };

        const dao = new RestDao(_spPageContextInfo.webAbsoluteUrl);
        const dataList = dao.lists("TestData"); //this.props.listName);
        dataList.getItems().then(this.processResults);
    }

    processResults(data) {
        if (data && data.d && data.d.results) {
            //alert(data.d.results.length + ' data entries returned');
        } else if (data && data.length > 0) {
            //alert(data.length + ' items returned');
            data.map( (item, i, arr) => { console.log(`Item ${i} has title ${item.Title}`); } )

            //const chartdata = [2.13, 4, 5.23, 1.234, 9.9, 11.1, 13, 2.5, 1.1, 6.6, 10, 3];
            let chartdata =  data.map( (item) => { return item.ANumber as Number; } )
            this.firstD3Test(chartdata);
        }
        //console.log(JSON.stringify(data));
    }

    firstD3Test(data) {
        const size = {
            width: 500,
            height:200,
            barPadding:2
        };
        let svg = d3.select("#chart")
            .append("svg")
            .attr("id", "testbarchart")
            .attr("height", size.height)
            .attr("width", size.width);
        svg.selectAll('rect')
            .data(data)
            .enter()
            .append("rect")
            .attr("x", function (d, i) { return i * (size.width / data.length); })
            .attr("y", function (d:number) { return size.height - ((d / d3.max(data)) * size.height); } )
            .attr("width", function () { return (size.width / data.length) - size.barPadding; })
            .attr("height", function (d:number) { return (d / d3.max(data)) * size.height; })
            .style("fill", function (d:number) { return "rgb(0, " + (d * 20) + ",0)"; });    
    }

    public render() {
        return (
            <SimpleBarchart />
        );
    }

}

export default SimpleBarchartContainer;
