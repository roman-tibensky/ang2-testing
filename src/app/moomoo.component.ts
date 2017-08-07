import {Component, OnInit} from '@angular/core';
import { MooMoo } from './model/moomoo';
import { MooMooService } from './services/moomoo.service';
import { Router } from '@angular/router';


const defSel = false;



@Component({
    selector: 'all-the-moos',
    templateUrl: './moomoos.component.html',
    styleUrls: ['./moomoos.component.css'],

})
export class MooMoosComponent implements OnInit {


    constructor(
        private moomooService: MooMooService,
        private router: Router,
    ) {}




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

    onMooClick(oneMoo: MooMoo) {
        this.selectedMoo = oneMoo;
    }

    onwardToMoo() {
        this.router.navigate(['/detail', this.selectedMoo.id]);
    }

    add(mooName: string) {
        const that = this;
        if (mooName.trim() !== '') {
            that.moomooService.add(mooName.trim())
                .then(oneMoo =>
                    this.cows.push(oneMoo)
                ).catch(e =>
                alert(e)
                );
        }
    }

    delete(oneMoo: MooMoo){
        this.moomooService.eradicate(oneMoo)
            .then(() => {
                    this.cows = this.cows.filter(noMoo => noMoo !== oneMoo);
                    if (oneMoo === this.selectedMoo) {
                        this.selectedMoo = null;
                    }
                }
            )

    }

}

