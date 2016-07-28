import * as React from "react";
import { RestDao } from "SPScript";
import DataList from "../views/data-list";

class DataListContainer extends React.Component<any, any> {

    //NOTE - React-router parsing by TypeScript fails if an isRequired property is defined!! 
    //This style of declaration is necessary for the compiler to find React.PropTypes definitions!
    //static propTypes = { listName: React.PropTypes.string.isRequired };
    //static defaultProps = { listName: "Some List Name" };

    constructor(props){
        super(props);
        this.state = {
            data: []
        };

        const dao = new RestDao(_spPageContextInfo.webAbsoluteUrl);
        const dataList = dao.lists("TestData"); //this.props.listName);
        dataList.getItems().then( (results) => { this.setState( { data: results } ); } );
    }

    public render() {
        return (
            <DataList className="sometestclass" data={this.state.data} />
        );
    }
}

export default DataListContainer;