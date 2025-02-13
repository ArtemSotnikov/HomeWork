'use strict';

import {Apartment} from "./Apartment.js";

export class Building {
    apartments = [];

    constructor(maxNumberApartments) {
        this.maxNumberApartments = maxNumberApartments;
    }

    addApartment(apartment) {
        if (apartment instanceof Apartment && this.apartments.length < this.maxNumberApartments) {
            this.apartments.push(apartment);
        } else {
            console.log("Sorry, no more apartments!");
        }
    }
}
