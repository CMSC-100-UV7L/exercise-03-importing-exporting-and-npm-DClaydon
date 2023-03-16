//import statements
import validator from "validator";
import { v4 as uuidv4 } from 'uuid';

function generateUniqueID(fName, lName){
    var UniqueID = fName[0].toLowerCase() + lName.toLowerCase() + uuidv4().slice(0,8);

    return UniqueID

}

console.log(generateUniqueID("Alan","Turing"));