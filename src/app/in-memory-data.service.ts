/**
 * Created by Roman T on 8/3/2017.
 */

import { InMemoryDbService } from 'angular-in-memory-web-api';
import { MooMoo} from './model/moomoo';

export class InMemoryDataService implements InMemoryDbService {
    createDb() {
        const heroes = [
        {
            id: 1,
            name: 'Moonika',
            amplifyer: 1,
            timesClicked: 0,
            mateID: -1
        },
        {
            id: 2,
            name: 'MooShine',
            amplifyer: 2,
            timesClicked: 0,
            mateID: -1
        },
        {
            id: 3,
            name: 'Mooniker',
            amplifyer: 2,
            timesClicked: 0,
            mateID: 4
        },
        {
            id: 4,
            name: 'FullMoo',
            amplifyer: 2,
            timesClicked: 0,
            mateID: 3
        },
        {
            id: 5,
            name: 'Moobeline',
            amplifyer: 1,
            timesClicked: 0,
            mateID: -1
        },
        {
            id: 6,
            name: 'Bovinel',
            amplifyer: 1,
            timesClicked: 0,
            mateID: -1
        },
        {
            id: 7,
            name: 'Moorylin',
            amplifyer: 2,
            timesClicked: 0,
            mateID: 9
        },
        {
            id: 8,
            name: 'Moolly-Vamooly',
            amplifyer: 2,
            timesClicked: 0,
            mateID: -1
        },
        {
            id: 9,
            name: 'MarkiMoo',
            amplifyer: 3,
            timesClicked: 0,
            mateID: 7
        },
        {
            id: 10,
            name: 'Bullywood',
            amplifyer: 5,
            timesClicked: 0,
            mateID: -1
        }
        ];

        return {heroes};
    }
}
