import * as React from "react";
import * as ReactDom from "react-dom";
import { RestDao } from "./SPScript";

function processResults(data) {
    if (data && data.d && data.d.results) {
        alert(data.d.results.length + ' data entries returned');
    } else if (data && data.length > 0) {
        alert(data.length + ' items returned');
        data.map( (item, i, arr) => { console.log(`Item ${i} has title ${item.Title}`); } )
    }
    //console.log(JSON.stringify(data));
}

window.onload = () => {
    //console.log("In here with "+  JSON.stringify(_spPageContextInfo));
    const dao = new RestDao(_spPageContextInfo.webAbsoluteUrl);
    const contactsList = dao.lists("Contacts");
    contactsList.getItems().then(processResults);
    ReactDom.render(<div>Here is react getting contact list items</div>, document.querySelector("#reactContent"));
};