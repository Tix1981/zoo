import { Component, OnInit } from '@angular/core';

import { Animal } from './animal';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  deleteRow(index) {
      this.animals.splice(index, 1);
  }

  constructor() { }

  ngOnInit() {
  }

  animals:Array<Object> = [

      new Animal("cow", "redcow", "2017"),
      new Animal("dog", "jackie", "1999"),
      new Animal("cat", "meow", "1998"),
      new Animal("tiger", "sheerkhan", "2000"),
      new Animal("lion", "king")

  ]

}
