/**
 * Created by aRTie on 30/07/2017.
 */



import { Injectable } from '@angular/core';
// import { MOOMOOS } from '../model/mock-moomoos';
import { MooMoo } from '../model/moomoo';
import { Headers, Http } from '@angular/http';
import 'rxjs/add/operator/toPromise';

@Injectable()
export class MooMooService {
    private headers = new Headers({'Content-Type': 'application/json'});
    private moorl = 'api/heroes';


    constructor(
        private http: Http
    ) { }

    getMooMoos(): Promise<MooMoo[]> {
        return this.http.get(this.moorl)
            .toPromise()
            .then(response =>
                response.json().data as MooMoo[])
            .catch(this.handleError);
    }

    private handleError(error: any): Promise<any> {
        console.error('An error occurred', error); // for demo purposes only
        return Promise.reject(error.message || error);
    }

    getOneMoo(id: number): Promise<MooMoo> {
        return this.http.get(`${this.moorl}/${id}`)
            .toPromise()
            .then(response =>
                response.json().data as MooMoo)
            .catch(this.handleError);

    //    return this.getMooMoos().then(allMoos => allMoos.find(oneMoo => oneMoo.id === id));
    }


    update(oneMoo: MooMoo): Promise<MooMoo>{
        const url = `${this.moorl}/${oneMoo.id}`;

        return this.http.put(
            url,
            JSON.stringify(oneMoo),
            {headers: this.headers}
        ).toPromise()
            .then(() => oneMoo)
            .catch(this.handleError);
    }

    add(mooName: string): Promise<MooMoo> {
        const oneMoo = {
            name: mooName,
            amplifyer: 1,
            timesClicked: 0,
            mateID: -1
        };

        return this.http.post(this.moorl, JSON.stringify(oneMoo), {headers: this.headers})
            .toPromise()
            .then(res =>
                res.json().data as MooMoo)
            .catch(this.handleError);
    }

    eradicate(oneMoo: MooMoo): Promise<any> {
        return this.http.delete(`${this.moorl}/${oneMoo.id}`)
            .toPromise()
            .then(() => null)
            .catch(this.handleError);

    }


}

