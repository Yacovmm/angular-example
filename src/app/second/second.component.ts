import { Component, OnInit } from '@angular/core';
import { ActivatedRoute } from '@angular/router';
import { Location } from '@angular/common';


@Component({
  selector: 'app-second',
  templateUrl: './second.component.html',
  styleUrls: ['./second.component.css']
})
export class SecondComponent implements OnInit {

  myAnimal = 'Dog';
  childAnimal = '';


  constructor(
    private route: ActivatedRoute,
    private location: Location) { }

  ngOnInit() {
    // let ourId = +this.route.snapshot.paramMap.get('id');
    // console.log(ourId);

  }

  btnClicked = () => {
    this.location.back();
  }

  childChange = (evt) => {
    console.log(evt);
    this.childAnimal = evt;
  }

}
