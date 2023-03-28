import {
    Component,
    ElementRef,
    EventEmitter,
    OnInit,
    Output,
    ViewChild,
} from '@angular/core';
import { UiSidenavComponent } from '../ui-sidenav/ui-sidenav.component';

@Component({
    selector: 'app-ui-header',
    templateUrl: './ui-header.component.html',
    styleUrls: ['./ui-header.component.scss'],
})
export class UiHeaderComponent implements OnInit {
    @Output() sideOpen = new EventEmitter<boolean>();

    headerPopupList = [
        { title: '로그인', icon: 'subdirectory_arrow_right' },
        { title: '로그아웃', icon: 'directions_run' },
        { title: '마이페이지', icon: 'person_pin' },
    ];
    constructor() {}

    ngOnInit(): void {}

    openSideNav(): void {
        this.sideOpen.emit();
    }
}
