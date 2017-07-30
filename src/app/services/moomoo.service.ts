/**
 * Created by aRTie on 30/07/2017.
 */

import { Injectable } from '@angular/core';
import { MOOMOOS } from '../model/mock-moomoos';
import { MooMoo } from '../model/moomoo';

@Injectable()
export class MooMooService {
    getMooMoos(): Promise<MooMoo[]> {
        return Promise.resolve(MOOMOOS);
    }

    getOneMoo(id: number): Promise<MooMoo> {
        return this.getMooMoos().then(allMoos => allMoos.find(oneMoo => oneMoo.id === id));
    }
}

