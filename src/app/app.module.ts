import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';

import { AppRoutingModule } from './app-routing.module';
import { AppComponent } from './app.component';
import { BrowserAnimationsModule } from '@angular/platform-browser/animations';
import { MaterialModule } from './material/material.module';
import { AppCommonModule } from './app-common/app-common.module';
import { BUILD_ENV } from './shared/config/build-config';
import { environment } from 'src/environments/environment';

@NgModule({
    declarations: [AppComponent],
    imports: [
        BrowserModule,
        AppRoutingModule,
        BrowserAnimationsModule,
        MaterialModule,
        AppCommonModule,
    ],
    providers: [
        {
            provide: BUILD_ENV,
            useValue: environment.buildType,
        },
    ],
    bootstrap: [AppComponent],
})
export class AppModule {}
