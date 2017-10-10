import { Component, OnInit } from '@angular/core';

import { Animal } from './animal';
import { Sector } from './sector';

@Component({
  selector: 'app-animal-list',
  templateUrl: './animal-list.component.html',
  styleUrls: ['./animal-list.component.css']
})
export class AnimalListComponent implements OnInit {

  constructor() { }

  ngOnInit() {
  }

  sector1 = new Sector('One', 'land');
  sector2 = new Sector('Two', 'water');
  sector3 = new Sector('Three', 'mud');
  sector4 = new Sector('Four', 'sand');

  animals:Array<Animal> = [

      new Animal("cow", "redcow", this.sector1, "2017"),
      new Animal("dog", "jackie", this.sector2,"1999"),
      new Animal("cat", "meow", this.sector3,"1998"),
      new Animal("tiger", "sheerkhan", this.sector4,"2000"),
      new Animal("lion", "king", this.sector3)

  ]

  deleteRow(index) {
      this.animals.splice(index, 1);
  }

  moveToTop(index) {
      let row = this.animals.splice(index, 1);
      this.animals.unshift(row[0]);
  }

  newAnimal:Animal = new Animal('', '', this.sector1, '');

  submitAnimal() {
      this.animals.push(this.newAnimal);
      this.newAnimal = new Animal('', '', this.sector1, '');
  }
}
