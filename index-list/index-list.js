import { Component, ContentChildren, ViewChild } from '@angular/core';
import { IndexSectionComponent } from './index-section';
var IndexListComponent = (function () {
    function IndexListComponent() {
        this._currentIndicator = 'A';
        this._flag = true;
        this._indexes = [];
        this._offsetTops = [];
        this._indicatorTime = null;
        this._showModal = false;
    }
    IndexListComponent.prototype.ngAfterViewChecked = function () {
        var _this = this;
        if (this._flag && this._listOfIndexSection) {
            this._listOfIndexSection.forEach(function (section) {
                _this._indexes.push(section.index);
                var offsetTop = section.getElementRef().nativeElement.offsetTop;
                _this._offsetTops.push(offsetTop);
            });
            this._flag = false;
        }
    };
    IndexListComponent.prototype.onScroll = function (e) {
        var _this = this;
        e.preventDefault();
        var scrollTopOffsetTop = this.scrollContent.nativeElement.scrollTop;
        this._offsetTops.forEach(function (v, i) {
            if (scrollTopOffsetTop >= v) {
                _this._currentIndicator = _this._indexes[i];
            }
        });
    };
    IndexListComponent.prototype.touchstart = function (e) {
        this._navOffsetX = e.changedTouches[0].clientX;
        this.scrollList(e.changedTouches[0].clientY);
    };
    IndexListComponent.prototype.touchmove = function (e) {
        e.preventDefault();
        this.scrollList(e.changedTouches[0].clientY);
    };
    IndexListComponent.prototype.touchend = function (e) {
        var _this = this;
        this._indicatorTime = setTimeout(function () {
            _this._showModal = false;
            _this._currentIndicator = '';
        }, 500);
    };
    IndexListComponent.prototype.scrollList = function (y) {
        var currentItem = document.elementFromPoint(this._navOffsetX, y);
        if (!currentItem || !currentItem.classList.contains('index-bar')) {
            return;
        }
        this._currentIndicator = currentItem['innerText'];
        var index = this._indexes.indexOf(this._currentIndicator);
        this.scrollContent.nativeElement.scrollTop = this._offsetTops[index];
        this._showModal = true;
        if (this._indicatorTime) {
            clearTimeout(this._indicatorTime);
        }
    };
    return IndexListComponent;
}());
export { IndexListComponent };
IndexListComponent.decorators = [
    { type: Component, args: [{
                selector: 'ion-index-list',
                template: "\n    <div class=\"index-list\">\n      <div class=\"index-list-wrapper\"  #scrollContent tappable (scroll)=\"onScroll($event)\">\n        <ng-content select=\"[top]\"></ng-content>\n        <ng-content></ng-content>\n      </div>\n\n      <div class=\"index-list-nav\" (touchstart)=\"touchstart($event)\" (touchmove)=\"touchmove($event)\" (touchend)=\"touchend($event)\">\n        <div class=\"index-bar\" *ngFor=\"let index of _indexes;\"\n             [class.index-list-nav-activate]=\"index === _currentIndicator\">\n          {{index}}\n        </div>\n      </div>\n\n      <div class=\"modal\" [class.show]=\"_showModal\">\n        {{_currentIndicator}}\n      </div>\n    </div>\n  ",
                styles: ["\n    ::-webkit-scrollbar {\n      width: 0\n    }\n\n    .index-list{\n      width: 100%;\n      display: flex;\n      justify-content: space-between;\n      height: 100%;\n      overflow: hidden;\n    }\n\n    .index-list-wrapper{\n      width: 100%;\n      overflow-y: scroll;\n      -webkit-overflow-scrolling: touch;\n    }\n\n    .index-list-nav{\n      width:6%;\n      position: absolute;\n      right: 0;\n      display: flex;\n      justify-content:center;\n      flex-direction: column;\n      text-align: center;\n      background-color: rgba(245, 245, 245, 0.3);\n      height: 100%;\n      z-index: 1000;\n      -webkit-touch-callout: none;\n    }\n\n    .index-bar{\n      padding: 2px 6px;\n      font-size: 12px;\n    }\n\n    .index-list-nav-activate{\n      color: red;\n    }\n\n    .modal {\n      top: 50%;\n      left: 50%;\n      z-index: 100;\n      position: fixed;\n      pointer-events: none;\n      width: 20vw;\n      height: 20vw;\n      line-height: 20vw;\n      margin-left: -10vw;\n      margin-top: -10vw;\n      color: #fff;\n      font-size: 3em;\n      text-align: center;\n      border-radius: 8px;\n      background-color: rgba(0, 0, 0, 0.52);\n      -webkit-box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);\n      box-shadow: 0 0 4px 1px rgba(0, 0, 0, 0.16);\n      -webkit-transition: opacity .5s;\n      -o-transition: opacity .5s;\n      transition: opacity .5s;\n      opacity: 0;\n    }\n\n    .modal.show {\n      opacity: 1;\n    }\n  "]
            },] },
];
IndexListComponent.ctorParameters = function () { return []; };
IndexListComponent.propDecorators = {
    '_listOfIndexSection': [{ type: ContentChildren, args: [IndexSectionComponent,] },],
    'scrollContent': [{ type: ViewChild, args: ['scrollContent',] },],
};
//# sourceMappingURL=index-list.js.map