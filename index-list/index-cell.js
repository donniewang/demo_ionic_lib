import { Component } from '@angular/core';
var IndexCellComponent = (function () {
    function IndexCellComponent() {
        this._lastItem = false;
    }
    IndexCellComponent.prototype.ngOnInit = function () { };
    return IndexCellComponent;
}());
export { IndexCellComponent };
IndexCellComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-index-cell',
                template: "\n      <div class=\"index-cell\">\n        <div class=\"index-cell-item\" [class.index-cell-item-last]=\"_lastItem\">\n          <ng-content></ng-content>\n        </div>\n      </div>\n    ",
                styles: ["\n      .index-cell{\n        background-color: #fff;\n        padding-left:10px\n      }\n\n      .index-cell-item{\n        box-sizing: border-box;\n        color: inherit;\n        min-height: 48px;\n        display: block;\n        overflow: hidden;\n        position: relative;\n        text-decoration: none;\n        border-bottom: 1px solid #dcd8d8;\n        width: 100%;\n        display: flex;\n        align-items: center;\n      }\n\n      .index-cell-item-last{\n        border-bottom: none;\n      }\n    "]
            },] },
];
IndexCellComponent.ctorParameters = function () { return []; };
//# sourceMappingURL=index-cell.js.map