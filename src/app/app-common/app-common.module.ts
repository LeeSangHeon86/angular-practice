import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCommonRoutingModule } from './app-common-routing.module';
import { UiHeaderComponent } from './component/ui-header/ui-header.component';
import { MaterialModule } from '../material/material.module';
import { UiSidenavComponent } from './component/ui-sidenav/ui-sidenav.component';

@NgModule({
    declarations: [UiHeaderComponent, UiSidenavComponent],
    imports: [CommonModule, AppCommonRoutingModule, MaterialModule],
    exports: [UiHeaderComponent, UiSidenavComponent],
})
export class AppCommonModule {}
