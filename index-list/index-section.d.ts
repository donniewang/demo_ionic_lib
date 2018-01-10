import { AfterViewChecked, ElementRef, QueryList } from '@angular/core';
import { IndexCellComponent } from './index-cell';
export declare class IndexSectionComponent implements AfterViewChecked {
    elementRef: ElementRef;
    index: string;
    _listOfIndexCell: QueryList<IndexCellComponent>;
    constructor(elementRef: ElementRef);
    getElementRef(): ElementRef;
    ngAfterViewChecked(): void;
}
