import { Component, ContentChildren, ElementRef, Input } from '@angular/core';
import { IndexCellComponent } from './index-cell';
var IndexSectionComponent = (function () {
    function IndexSectionComponent(elementRef) {
        this.elementRef = elementRef;
    }
    IndexSectionComponent.prototype.getElementRef = function () {
        return this.elementRef;
    };
    IndexSectionComponent.prototype.ngAfterViewChecked = function () {
        if (this._listOfIndexCell && this._listOfIndexCell.length) {
            var listArray = this._listOfIndexCell.toArray();
            listArray[listArray.length - 1]._lastItem = true;
        }
    };
    return IndexSectionComponent;
}());
export { IndexSectionComponent };
IndexSectionComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-index-section',
                template: "\n      <div class=\"index-section\">\n            <!-- group-->\n            <div class=\"index-section-index\">\n\n              {{index}}\n\n            </div>\n\n            <!--\u5206\u7EC4\u4E0B\u7684\u8BE6\u7EC6\u5185\u5BB9-->\n            <div class=\"index-section-main\">\n              <ng-content>\n\n              </ng-content>\n            </div>\n        </div>\n    ",
                styles: ["\n    .index-section-index{\n      margin: 0;\n      padding: 10px;\n      background-color: #fafafa;\n    }\n\n    .index-section-main{\n      border-bottom: 1px solid #dcd8d8;\n      border-top: 1px solid #dcd8d8;\n    }\n  "]
            },] },
];
IndexSectionComponent.ctorParameters = function () { return [
    { type: ElementRef, },
]; };
IndexSectionComponent.propDecorators = {
    'index': [{ type: Input },],
    '_listOfIndexCell': [{ type: ContentChildren, args: [IndexCellComponent,] },],
};
//# sourceMappingURL=index-section.js.map