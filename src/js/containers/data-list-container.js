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
    function DataListContainer(props) {
        var _this = this;
        _super.call(this, props);
        this.state = {
            data: []
        };
        var dao = new SPScript_1.RestDao(_spPageContextInfo.webAbsoluteUrl);
        var dataList = dao.lists("TestData");
        dataList.getItems().then(function (results) { _this.setState({ data: results }); });
    }
    DataListContainer.prototype.render = function () {
        return (React.createElement(data_list_1.default, {data: this.state.data}));
    };
    return DataListContainer;
}(React.Component));
Object.defineProperty(exports, "__esModule", { value: true });
exports.default = DataListContainer;

//# sourceMappingURL=data-list-container.js.map
