
// ****PASO2 FICHERO TESTPROFESIONAL.TS****

import { Professional } from "./professional";

const professional1 = new Professional("Harrison Ford", 81, 85, 185, false, "American", 0, "actor");

const professional1Info = professional1.printAttributes();
console.log(professional1Info);