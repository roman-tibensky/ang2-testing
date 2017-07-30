import {Component, OnInit} from '@angular/core';
import { MooMoo } from './model/moomoo';
import { MooMooService } from './services/moomoo.service';


const defSel = false;







@Component({
    selector: 'all-the-moos',
    templateUrl: './moomoos.component.html',
    styleUrls: ['./app.component.css'],

})
export class MooMoosComponent implements OnInit {


    constructor(private moomooService: MooMooService) {}




    cows: MooMoo[];
    isOneSelected = defSel;
    selectedMoo: MooMoo;

    ngOnInit(): void {
        this.getMooMoos();
    }

    getMooMoos() {
        this.moomooService.getMooMoos().then(moomoos => {
            this.cows = moomoos;
        });
    }


    onCowSelect(oneMoo) {
        this.selectedMoo = oneMoo;
    }
}

