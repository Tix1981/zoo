import { Component, OnInit } from '@angular/core';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  animals:Array<Object> = [

      {
          "animalType": "cow",
          "name": "Red Cow",
          "birthday": "1st January 2017."
      },

      {
          "animalType": "dog",
          "name": "Jackie",
          "birthday": "1st February 2017."
      },

      {
          "animalType": "cat",
          "name": "Meow",
          "birthday": "21st July 2017."
      },

      {
          "animalType": "tiger",
          "name": "SheerKhan",
          "birthday": "2nd August 2017."
      },

      {
          "animalType": "bear",
          "name": "Grizly",
          "birthday": "15th February 2017."
      },

      {
          "animalType": "lion",
          "name": "King"
      },

  ]

}
