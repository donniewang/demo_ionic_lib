import { NgModule } from '@angular/core';
import { IndexListComponent } from './index-list';
import { IndexSectionComponent } from './index-section';
import { CommonModule } from '@angular/common';
import { IndexCellComponent } from './index-cell';
var IndexListModule = (function () {
    function IndexListModule() {
    }
    return IndexListModule;
}());
export { IndexListModule };
IndexListModule.decorators = [
    { type: NgModule, args: [{
                declarations: [
                    IndexListComponent,
                    IndexSectionComponent,
                    IndexCellComponent
                ],
                imports: [
                    CommonModule,
                ],
                exports: [
                    IndexListComponent,
                    IndexSectionComponent,
                    IndexCellComponent
                ]
            },] },
];
IndexListModule.ctorParameters = function () { return []; };
//# sourceMappingURL=index-list.module.js.map