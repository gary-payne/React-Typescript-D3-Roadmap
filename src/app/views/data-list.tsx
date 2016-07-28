import * as React from "react";

//A statless functional component
export default function(props) {
    return (
        <div>
            <div>The raw data:</div>
            <ul className="data-list">
                {props.data.map( (listItem) => { 
                    return (<li key={listItem.Id}>{listItem.Title} = { (typeof listItem.ANumber === "undefined")?"null":listItem.ANumber}</li>); 
                })}
            </ul>
        </div>
    );
}