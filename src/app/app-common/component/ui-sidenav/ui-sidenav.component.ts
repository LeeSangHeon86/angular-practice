import { Component, OnInit, ViewChild } from '@angular/core';
import { MatDrawer } from '@angular/material/sidenav';

@Component({
    selector: 'app-ui-sidenav',
    templateUrl: './ui-sidenav.component.html',
    styleUrls: ['./ui-sidenav.component.scss'],
})
export class UiSidenavComponent implements OnInit {
    @ViewChild('sideNav') sideNav!: MatDrawer;

    sideNavList = [
        { title: 'step1', icon: 'import_contacts' },
        { title: 'step2', icon: 'mail_outline' },
        { title: 'step3', icon: 'movie' },
        { title: 'step4', icon: 'drafts' },
        { title: 'step5', icon: 'toys' },
    ];

    constructor() {}

    ngOnInit(): void {}

    openSideNav($event: boolean): void {
        this.sideNav.toggle($event).then();
    }
}
