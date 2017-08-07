/**
 * Created by Roman T on 8/6/2017.
 */

import { Component, OnInit } from '@angular/core';
import { Router }            from '@angular/router';

import { Observable }        from 'rxjs/Observable';
import { Subject }           from 'rxjs/Subject';

// Observable class extensions
import 'rxjs/add/observable/of';

// Observable operators
import 'rxjs/add/operator/catch';
import 'rxjs/add/operator/debounceTime';
import 'rxjs/add/operator/distinctUntilChanged';

import { MooMoo } from '../model/moomoo';
import {MoomooSearchService } from '../services/moomoo.search.service';

@Component({
    selector: 'moomoo-search',
    templateUrl: './moomoo-search.component.html',
    styleUrls: ['./moomoo-search.component.css'],
    providers: [MoomooSearchService]
})

export class MoomooSearchComponent implements OnInit {
    moomoos: Observable<MooMoo[]>;
    private searchTerms = new Subject<string>();

    constructor(
        private moomoSearchService: MoomooSearchService,
        private router: Router
    ) { }

    search(term: string): void {
        this.searchTerms.next(term);
    }

    ngOnInit(): void {
        this.moomoos = this.searchTerms
            .debounceTime(300) // wait 300ms after each keystroke before considering the term
            .distinctUntilChanged() // ignore if next search term is same as previous
            .switchMap(term => term // switch to new observable each time the term changes
            ? this.moomoSearchService.search(term) // return the http search observable
            : Observable.of<MooMoo[]>([])) // or the observable of empty heroes if there was no search term
            .catch(e => {
                console.log(e);
                return Observable.of<MooMoo[]>([]);
            });
    }

    gotoDetail(oneMoo: MooMoo): void {
        const link = ['/detail', oneMoo.id];
        this.router.navigate(link);
    }
}

