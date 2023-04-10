import { NgModule } from '@angular/core';
import { CommonModule } from '@angular/common';

import { AppCommonRoutingModule } from './app-common-routing.module';
import { UiHeaderComponent } from './component/ui-header/ui-header.component';
import { MaterialModule } from '../material/material.module';
import { UiSidenavComponent } from './component/ui-sidenav/ui-sidenav.component';
import { UiLoginComponent } from './page/ui-login/ui-login.component';
import { FormModule } from '../shared/form/form.module';
import { FormsModule, ReactiveFormsModule } from '@angular/forms';
import { UiLoginAct1Component } from './page/ui-login-act1/ui-login-act1.component';

@NgModule({
    declarations: [
        UiHeaderComponent,
        UiSidenavComponent,
        UiLoginComponent,
        UiLoginAct1Component,
    ],
    imports: [
        CommonModule,
        AppCommonRoutingModule,
        MaterialModule,
        FormModule,
        ReactiveFormsModule,
        FormsModule,
    ],
    exports: [UiHeaderComponent, UiSidenavComponent],
})
export class AppCommonModule {}
