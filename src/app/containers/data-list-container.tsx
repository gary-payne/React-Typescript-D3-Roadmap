import * as React from "react";
import { RestDao } from "SPScript";
import DataList from "../views/data-list";

class DataListContainer extends React.Component<any, any> {

    constructor(props){
        super(props);
        this.state = {
            data: []
        };

        const dao = new RestDao(_spPageContextInfo.webAbsoluteUrl);
        const dataList = dao.lists("TestData");
        dataList.getItems().then( (results) => { this.setState( { data: results } ); } );
    }

    public render() {
        return (
            <DataList data={this.state.data} />
        );
    }
}

export default DataListContainer;