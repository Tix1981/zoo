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

  sectors:Array<Sector> = [
      new Sector('One', 'land'),
      new Sector('Two', 'water'),
      new Sector('Three', 'land'),
      new Sector('Four', 'water'),
  ]


  animals:Array<Animal> = [

      new Animal("cow", "redcow", this.sectors[0], "2017"),
      new Animal("dog", "jackie", this.sectors[1],"1999"),
      new Animal("cat", "meow", this.sectors[2],"1998"),
      new Animal("tiger", "sheerkhan", this.sectors[3],"2000"),
      new Animal("lion", "king", this.sectors[2])

  ]

  deleteRow(index) {
      this.animals.splice(index, 1);
  }

  moveToTop(index) {
      let row = this.animals.splice(index, 1);
      this.animals.unshift(row[0]);
  }

  newAnimal:Animal = new Animal('', '', this.sectors[0], '');

  submitAnimal() {
      this.animals.push(this.newAnimal);
      this.newAnimal = new Animal('', '', this.sectors[0], '');
  }

  showSectorAnimals(index) {
      let sectorAnimals:Array<string> = [];

      for(var i = 0; i<this.animals.length; i++) {
          if(this.animals[i].sector.name === this.sectors[index].name) {
              sectorAnimals.push(this.animals[i].name);
          }
      }
      alert(sectorAnimals);
  }
}
