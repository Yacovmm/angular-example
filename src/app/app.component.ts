import { Component, OnInit } from '@angular/core';
import { PeopleService } from './people.service';

@Component({
  selector: 'app-root',
  templateUrl: './app.component.html',
  styleUrls: ['./app.component.css']
})
export class AppComponent implements OnInit {
  title = 'Yacov app';
  count = 0;
  people = [];

  myColor = 'green';
  today = new Date();

  constructor(private peopleService: PeopleService) { }

  ngOnInit() {
    this.count = 1;
    this.people = this.peopleService.allPeople();

    this.peopleService.newObservable$.subscribe(
      data => {
        console.log('obs data here:', data);
      },
      error => {
        console.log(error);
      }
    );
  }


  btnClicked = () => {
    this.count++;
  };

  btnClicked2 = () => {
    this.count = 0;
  };

}
