
import { Professional } from "./professional"

export class Movie {

    public title: string;
    public releaseYear: number;
    public actors: Professional[];
    public nacionality: string;
    public director: Professional;
    public writer: Professional;
    public language: string;
    public plataforma: string;
    public isMCU: boolean;
    public mainCharacterName: string;
    public producer: string;
    public distributor: string;
    public genre: string;

    constructor(title: string, releaseYear: number, nacionality: string, genre: string) {
        this.title = title;
        this.releaseYear = releaseYear;
        this.actors = [];
        this.nacionality = nacionality;
        // this.director = [];
        // this.writer = [];
        this.director = new Professional("", 0, 0, 0, true, "", 0, "");
        this.writer = new Professional("", 0, 0, 0, true, "", 0, "");
        this.language = "english";
        this.plataforma = "Netflix";
        this.isMCU = true;
        this.mainCharacterName = "Martha Cooper";
        this.producer = "Mily Way";
        this.distributor = "Sony films";
        this.genre = genre;
    }

    printMovieData(): any {
        let nameActors = this.actors.map((actor) => actor.name)
        // let nameDirector = this.director.map((direct) => direct.name)
        // let nameWriter = this.writer.map((writ) => writ.name)

        let movieDataInfo = "";        
        movieDataInfo = `Title: ${this.title}
        Release Year: ${this.releaseYear}
        Nacionality: ${this.nacionality}
        Actors: ${nameActors}
        Nacionality: ${this.nacionality}
        Director: ${this.director.name}
        Writer: ${this.writer.name}
        Language: ${this.language}
        Plataforma: ${this.plataforma}
        Main Character Name: ${this.mainCharacterName}
        Producer: ${this.producer}
        Distributor: ${this.distributor}
        Genre: ${this.genre}`
        
        return movieDataInfo;
    }
}
