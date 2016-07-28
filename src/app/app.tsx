import * as React from "react";
import * as ReactDom from "react-dom";

import Router from "./router";

window.onload = () => {
    ReactDom.render(
        Router, 
        document.querySelector("#reactContent")
    );
};