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
    templateUrl: 'moomoo-detail.html',
    styleUrls: ['./moomoo-detail.component.css']
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

    save(): void {
        this.mooServ.update(this.oneMoo)
            .then(() => this.location.back())
            .catch((e) => {
                alert(e);
            });
    }

}
