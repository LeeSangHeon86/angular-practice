import { Component, EventEmitter, Inject, OnInit, Output } from '@angular/core';
import routerUrl from '../../../data/routerUrl';
import { BUILD_ENV } from '../../../shared/config/build-config';
import { BuildService } from '../../../service/build.service';

@Component({
    selector: 'app-ui-header',
    templateUrl: './ui-header.component.html',
    styleUrls: ['./ui-header.component.scss'],
})
export class UiHeaderComponent implements OnInit {
    @Output() sideOpen = new EventEmitter<boolean>();

    headerPopupList = [
        {
            title: '로그인',
            icon: 'subdirectory_arrow_right',
            path: routerUrl.user.login,
        },
        {
            title: '로그인_ACT1',
            icon: 'subdirectory_arrow_right',
            path: routerUrl.user.login_act1,
        },
        { title: '로그아웃', icon: 'directions_run' },
        { title: '마이페이지', icon: 'person_pin' },
    ];

    buildType = this.buildService.buildType;

    constructor(private buildService: BuildService) {}

    ngOnInit(): void {}

    openSideNav(): void {
        this.sideOpen.emit();
    }
}
