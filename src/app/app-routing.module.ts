/**
 * Created by Roman T on 7/31/2017.
 */


import { NgModule } from '@angular/core';
import { RouterModule, Routes } from '@angular/router';

import { MooDashComponent } from './dashboard/dashboard.component';
import { MooMooDetailComponent } from './moomoo-detail/moomoo-detail.component';
import { MooMoosComponent } from './moomoo.component';

const routes: Routes = [
    {
        path: 'moomoos',
        component: MooMoosComponent
    },
    {
        path: 'dashboard',
        component: MooDashComponent
    },
    {
        path: '',
        redirectTo: '/dashboard',
        pathMatch: 'full'
    },
    {
        path: 'detail/:id',
        component: MooMooDetailComponent
    },
];

@NgModule({
    imports: [ RouterModule.forRoot(routes) ],
    exports: [ RouterModule ],
})

export class AppRoutingModule {}
