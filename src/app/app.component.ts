import { Component, OnInit } from '@angular/core';
import { MooMoosComponent } from './moomoo.component';


@Component({
    selector: 'app-root',
    template: `
        <div>
            <h1 style="text-align:center">
                Welcome to {{title}}!
            </h1>
            <nav>
                <a routerLink="/moomoos"> MooMoos</a>
                <a routerLink="/dashboard">Dashboard</a>
            </nav>
            <router-outlet></router-outlet>
        </div>`,
    styleUrls: ['./app.component.css'],
})

export class AppComponent {
    title = 'The Dork League 3: The Dorkening';
}