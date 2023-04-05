import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';
import { UiLoginComponent } from './app-common/page/ui-login/ui-login.component';
import routerUrl from './shared/routerUrl';

const routes: Routes = [
    {
        path: routerUrl.user.login,
        component: UiLoginComponent,
    },
    {
        path: 'step1',
        loadChildren: () =>
            import('./app-step1/app-step1.module').then(
                (m) => m.AppStep1Module
            ),
    },
    {
        path: '',
        redirectTo: '',
        pathMatch: 'full',
    },
];

@NgModule({
    imports: [RouterModule.forRoot(routes)],
    exports: [RouterModule],
})
export class AppRoutingModule {}
