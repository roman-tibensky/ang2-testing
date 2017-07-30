/**
 * Created by aRTie on 23/07/2017.
 */

import { Component, Input, OnInit } from '@angular/core';
import { ActivatedRoute, ParamMap } from '@angular/router';
import { Location } from '@angular/common';
import { MooMoo } from '../model/moomoo';
import { MooMooService } from '../services/moomoo.service';
import 'rxjs/add/operator/switchMap';

@Component({
    selector: 'moomoo-detail',
    template: `
        <div *ngIf="oneMoo">
            <h2>{{oneMoo.name}} is ready to be clicked on</h2>
            <div>
                <label>Rename: </label>
                <input [(ngModel)]="oneMoo.name">
            </div>
            <h2>STATS:</h2>
            <ul>
                <li>ID: {{oneMoo.name}}</li>
                <li>Clicked: {{oneMoo.timesClicked}}</li>
                <li>AMP: {{oneMoo.amplifyer}}</li>
                <li>mate: {{oneMoo.mateID > -1 ? oneMoo.mateID : 'N/A'}}</li>
            </ul>
        </div>
    `
})



export class MooMooDetailComponent implements OnInit {
    oneMoo: MooMoo;

    constructor(
        private mooServ: MooMooService,
        private route: ActivatedRoute,
        private location: Location
    ) {}

    ngOnInit(): void {
        this.route.paramMap
            .switchMap((params: ParamMap) =>
            this.mooServ.getOneMoo(+params.get('id')))
            .subscribe(oneMoo => {this.oneMoo = oneMoo});
    }

}
