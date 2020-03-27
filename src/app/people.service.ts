import { Injectable } from '@angular/core';
import { Observable } from 'rxjs';

@Injectable({
  providedIn: 'root'
})
export class PeopleService {

  newObservable$ = new Observable(observer => {
    observer.next('hello');
  });

  people = [
    { name: 'Yacov', age: '20' },
    { name: 'Larissa', age: '22' }
  ];

  constructor() { }

  allPeople() {
    return this.people;
  }
}
