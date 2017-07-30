import { Component, OnInit } from '@angular/core';
import { MooMooService } from '../services/moomoo.service';

@Component({
    selector: 'dashie-dashie',
    templateUrl: 'dashboard.html',
})

export class MooDashComponent implements OnInit {
    cows;

    constructor(private mooServ: MooMooService){}

    ngOnInit(): void {
        this.mooServ.getMooMoos().then(allMoos => {

            this.cows = allMoos.slice(0, 4);

        });
    }
}