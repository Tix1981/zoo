import { Sector } from './sector';

export class Animal {

    species:string;
    name:string;
    dateOfBirth:string;
    sector:Sector;

    constructor(species:string, name:string, sector:Sector, dateOfBirth:string = "") {

        this.species = species;
        this.name = name;
        this.sector = sector;
        this.dateOfBirth = dateOfBirth;


    }

}
