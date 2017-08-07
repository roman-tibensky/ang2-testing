/**
 * Created by Roman T on 8/6/2017.
 */


import { Injectable } from '@angular/core';
import { Http } from '@angular/http';
import { Observable} from 'rxjs/Observable';
import 'rxjs/add/operator/map';

import { MooMoo} from '../model/moomoo';

@Injectable()
export class MoomooSearchService {
    constructor(private http: Http) { }

    search(term: string): Observable<MooMoo[]> {
        return this.http.get(`api/heroes/?name=${term}`)
            .map(res => res.json().data as MooMoo[]);
    }

}

