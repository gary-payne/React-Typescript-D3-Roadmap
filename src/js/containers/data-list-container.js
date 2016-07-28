"use strict";
var __extends = (this && this.__extends) || function (d, b) {
    for (var p in b) if (b.hasOwnProperty(p)) d[p] = b[p];
    function __() { this.constructor = d; }
    d.prototype = b === null ? Object.create(b) : (__.prototype = b.prototype, new __());
};
var React = require("react");
var SPScript_1 = require("SPScript");
var data_list_1 = require("../views/data-list");
var DataListContainer = (function (_super) {
    __extends(DataListContainer, _super);
    //NOTE - React-router parsing by TypeScript fails if an isRequired property is defined!! 
    //This style of declaration is necessary for the compiler to find React.PropTypes definitions!
    //static propTypes = { listName: React.PropTypes.string.isRequired };
    //static defaultProps = { listName: "Some List Name" };
    function DataListContainer(props) {
        var _this = this;
        _super.call(this, props);
        this.state = {
            data: []
        };
        var dao = new SPScript_1.RestDao(_spPageContextInfo.webAbsoluteUrl);
        var dataList = dao.lists("TestData"); //this.props.listName);
        dataList.getItems().then(function (results) { _this.setState({ data: results }); });
    }
    DataListContainer.prototype.render = function () {
        return (React.createElement(data_list_1.default, {className: "sometestclass", data: this.state.data}));
    };
    return DataListContainer;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataListContainer;

//# sourceMappingURL=data-list-container.js.map
