//import statements
import validator from "validator";
import { v4 as uuidv4 } from 'uuid';
import { appendFileSync } from 'node:fs';


function generateUniqueID(fName, lName){
    var UniqueID = fName[0].toLowerCase() + lName.toLowerCase() + uuidv4().slice(0,8);

    return UniqueID

}

//function for adding an acount into the users.txt file
function addAccount(entries){
    
    //if condition that follows the 4 given condition in the specifications
    if(entries.length == 4 && (entries[0] != "" && entries[1] != "" && entries[2] != "") && (validator.isEmail(entries[2])) && (entries[3] >= 18)){
        //variable assignment for better readability
        var fName = entries[0]
        var lName = entries[1]
        var eMail = entries[2]
        var age = entries[3]
        appendFileSync("users.txt",`${fName},${lName},${eMail},${age},${generateUniqueID(fName,lName)}\n`)
         return true
    } else {
        return false
    }
}

export  { addAccount, generateUniqueID }


