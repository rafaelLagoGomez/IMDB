
import { Professional } from "./professional";
import { Movie } from "./movie";

const professionalActor = new Professional("Mary Williams", 30, 65, 165, false, "American", 0, "Actor");
const professionalActor2 = new Professional("Daniel Bis", 31, 44, 172, false, "French", 0, "Writer");
const professionalDirector = new Professional("Daniel Jack", 65, 80, 177, true, "English", 1, "Director");
const professionalWriter = new Professional("Helen Brown", 49, 60, 160, false, "American", 0, "Writer");

const movie1 = new Movie("Black Machine", 2001, "American", "Comedy");
movie1.actors.push(professionalActor, professionalActor2);
movie1.director = professionalDirector;
movie1.writer = professionalWriter;

const movie1Info = movie1.printMovieData();
console.log(movie1Info);


