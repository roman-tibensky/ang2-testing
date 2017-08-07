import { NgModule } from '@angular/core';
import { BrowserModule } from '@angular/platform-browser';
import { FormsModule } from '@angular/forms';
import { AppRoutingModule} from './app-routing.module';
import { HttpModule } from '@angular/http';

import { InMemoryWebApiModule } from 'angular-in-memory-web-api';
import { InMemoryDataService } from './in-memory-data.service';

import { AppComponent } from './app.component';
import { MooMoosComponent } from './moomoo.component';
import { MooMooDetailComponent } from './moomoo-detail/moomoo-detail.component';
import { MooDashComponent } from './dashboard/dashboard.component';
import { MoomooSearchComponent } from './moomoo-search/moomoo-search.component';

import { MooMooService } from './services/moomoo.service';


@NgModule({
    declarations: [
        AppComponent,
        MooMoosComponent,
        MooMooDetailComponent,
        MooDashComponent,
        MoomooSearchComponent
    ],
    imports: [
        BrowserModule,
        FormsModule,
        AppRoutingModule,
        HttpModule,
        InMemoryWebApiModule.forRoot(InMemoryDataService),
    ],
    providers: [MooMooService],
    bootstrap: [AppComponent]
})
export class AppModule { }
