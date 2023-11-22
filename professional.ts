
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

    printAttributes(): any {
        let professionalInfo = "";
        professionalInfo = `Name: ${this.name}
        Age: ${this.age}
        Weight: ${this.weight}
        Height: ${this.height}
        Is retired: ${this.isRetired}
        Nationality: ${this.nationality}
        Number of Oscars: ${this.oscarsNumber}
        Profession: ${this.profession}`
        
        return professionalInfo;
    }
}
