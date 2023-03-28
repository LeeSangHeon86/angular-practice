import { Component, ViewChild } from '@angular/core';
import { UiSidenavComponent } from './app-common/component/ui-sidenav/ui-sidenav.component';

@Component({
    selector: 'app-root',
    templateUrl: './app.component.html',
    styleUrls: ['./app.component.scss'],
})
export class AppComponent {
    @ViewChild('sideNav') sideNav!: UiSidenavComponent;
    isSideOpen = false;

    sideOpen(): void {
        this.isSideOpen = !this.isSideOpen;
        this.sideNav.openSideNav(this.isSideOpen);
    }
}
