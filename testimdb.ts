
import { Movie } from './movie';
import {Imdb} from './imdb';
import { Professional } from './professional';

let movie1 = new Movie ("Nothihg",1994, "USA", "Comedy");
let movie2 = new Movie ("Star Wars", 1979, "USA", "Fiction")
let director1 = new Professional ("Will DA", 48, 52, 1.65, true, "Spanish", 1, "director");
let director2 = new Professional("Arian SKS", 54, 73, 1.83,true, "American",0, "actor")
let writer1 = new Professional ("Arlond Dals", 45, 56, 1.60, false, "Spanish", 1, "actor");
let writer2 = new Professional ("Magy Pirr", 39, 65, 1.78, true, "Indian", 0, "actor");
let actor1 = new Professional("Bill Murray", 45, 56, 1.56, true, "Spanish", 2, "director");
let actor2 = new Professional("Mich Born", 45, 63, 1.72, true, "Brithis", 3, "actor")

movie1.actors.push(actor1);
movie2.actors.push(actor2),
movie1.director = director1;
movie2.director = director2;
movie1.writer = writer1;
movie2.writer = writer2;

let myFilm1 = new Imdb ([movie1, movie2]);
console.log(myFilm1);