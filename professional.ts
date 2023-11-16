
// ****PASO1 CLASE PROFESSIONAL****

export class Professional {
    
    public name: string;
    public age: number;
    public weight: number;
    public height: number;
    public isRetired: boolean;
    public nationality: string;
    public oscarsNumber: number;
    public profession: string;

    constructor(name: string, age: number, weight: number, height: number, isRetired: boolean, nationality: string, oscarsNumber: number, profession: string) {
        this.name = name;
        this.age = age;
        this.weight = weight;
        this.height = height;
        this.isRetired = isRetired;
        this.nationality = nationality;
        this.oscarsNumber = oscarsNumber;
        this.profession = profession;
    }

    printAttributes(): void {
        console.log(`Name: ${this.name}`);
        console.log(`Age: ${this.age}`);
        console.log(`Weight: ${this.weight}`);
        console.log(`Height: ${this.height}`);
        console.log(`Is retired: ${this.isRetired}`);
        console.log(`Nationality: ${this.nationality}`);
        console.log(`Number of Oscars: ${this.oscarsNumber}`);
        console.log(`Profession: ${this.profession}`);
    }
}
