import { AfterViewChecked, ElementRef, QueryList } from '@angular/core';
import { IndexSectionComponent } from './index-section';
export declare class IndexListComponent implements AfterViewChecked {
    _currentIndicator: string;
    _flag: boolean;
    _indexes: any[];
    _offsetTops: Array<number>;
    _navOffsetX: 0;
    _indicatorTime: any;
    _showModal: boolean;
    _listOfIndexSection: QueryList<IndexSectionComponent>;
    scrollContent: ElementRef;
    constructor();
    ngAfterViewChecked(): void;
    onScroll(e: any): void;
    touchstart(e: any): void;
    touchmove(e: any): void;
    touchend(e: any): void;
    scrollList(y: any): void;
}
