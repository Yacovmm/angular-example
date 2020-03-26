import { Injectable } from '@angular/core';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {
  people = [
    { name: 'Yacov', age: '20' },
    { name: 'Larissa', age: '22' }
  ];

  constructor() { }

  allPeople() {
    return this.people;
  }
}
