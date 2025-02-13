'use strict';

import { Human } from './Human.js';

export class Apartment {
    residents = [];

    addResident(human) {
        if (human instanceof Human) {
            this.residents.push(human);
        } else {
            console.log("Oops not allowed!");
        }

    }
}