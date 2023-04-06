import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCommonRoutingModule } from './app-common-routing.module';
import { UiHeaderComponent } from './component/ui-header/ui-header.component';
import { MaterialModule } from '../material/material.module';
import { UiSidenavComponent } from './component/ui-sidenav/ui-sidenav.component';
import { UiLoginComponent } from './page/ui-login/ui-login.component';
import { FormModule } from '../shared/form/form.module';
import { ReactiveFormsModule } from '@angular/forms';

@NgModule({
    declarations: [UiHeaderComponent, UiSidenavComponent, UiLoginComponent],
    imports: [
        CommonModule,
        AppCommonRoutingModule,
        MaterialModule,
        FormModule,
        ReactiveFormsModule,
    ],
    exports: [UiHeaderComponent, UiSidenavComponent],
})
export class AppCommonModule {}
