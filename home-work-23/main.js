'use strict';

/*
#1
Усі класи розкласти по своїм файлам і імпортувати! Наприклад, клас Human має бути в окремому файлі Human.js

a) Створити клас Людина.
  Властивості:
    імʼя;
    стать.
  Методи:
    конструктор, який приймає два параметри: імʼя та стать.

b) Створити клас Квартира.
  Властивості:
    конструктор не потрібен;
    масив жителів, який при створенні пустий.
  Методи:
    додати жителя - метод повинен приймати екземпляр класу Людина, та додавати до масиву жителів.

c) Створити клас Будинок.

  Властивості:
    масив квартир, який при створенні пустий;
    максимальна кількість квартир.
  Методи:
    конструктор, який приймає один параметр: максимальну кількість квартир;
    додати квартиру - метод повинен приймати екземпляр класу Квартира, перевіряти, чи не буде кількість перевищувати максимальну кількість квартир, і якщо це так, додати квартиру, в іншому випадку виводить у консоль відповідне повідомлення.

d) В якості демонстраціїї створити:
  декілька екземплярів класу Людина;
  декілька екземплярів класу Квартира;
  додадити екземпляри класу Людина до екземплярів класу Квартира;
  екземпляр класу Будинок;
  додадити екземпляри класу Квартира до екземплярів класу Будинок.
*/

import { Human } from './Human.js';
import {Apartment} from "./Apartment.js";
import {Building} from "./Building.js";

const bill = new Human("Bill", "male");
const alice = new Human("Alice", "female");
const nigel =  new Human("Nigel", "male");
const fred = new Human("Fred", "male");

console.log(bill);

const apartment1 = new Apartment();
const apartment2 = new Apartment();
const apartment3 = new Apartment();

apartment1.addResident(bill);
apartment1.addResident(alice);
apartment2.addResident(nigel);
apartment3.addResident(fred);

console.log(apartment1);
console.log(apartment2);
console.log(apartment3);

const building = new Building(4);

building.addApartment(apartment1);
building.addApartment(apartment2);
building.addApartment(apartment3);

console.log(building);
console.log(building.apartments[1].residents[0].name);
console.log(building.apartments[0].residents[1].sex);

// Test maxNumberApartments
const buildingTest = new Building(2);

buildingTest.addApartment(apartment1);
buildingTest.addApartment(apartment2);
buildingTest.addApartment(apartment3);

