import * as React from "react";
import * as ReactDom from "react-dom";

window.onload = () => {
    console.log("In here has changed");
    ReactDom.render(<div>Here is react!</div>, document.querySelector("#reactContent"));
};