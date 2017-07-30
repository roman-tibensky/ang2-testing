import { BrowserModule } from '@angular/platform-browser';
import { NgModule } from '@angular/core';
import { FormsModule } from '@angular/forms';
import { RouterModule} from '@angular/router';

import { AppComponent } from './app.component';
import { MooMoosComponent } from './moomoo.component';
import { MooMooDetailComponent } from './moomoo-detail/moomoo-detail.component';
import { MooDashComponent } from './dashboard/dashboard.component';

import { MooMooService } from './services/moomoo.service';





@NgModule({
    declarations: [
        AppComponent,
        MooMoosComponent,
        MooMooDetailComponent,
        MooDashComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        RouterModule.forRoot([
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
        ])
    ],
    providers: [MooMooService],
    bootstrap: [AppComponent]
})
export class AppModule { }
