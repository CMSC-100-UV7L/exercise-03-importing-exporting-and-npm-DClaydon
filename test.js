import {addAccount, generateUniqueID} from "./functions.js";

//test cases for generateUniqueID
console.log(generateUniqueID("Allan", "Turing"))
console.log(generateUniqueID("Tony", "Stark"))
console.log(generateUniqueID("Tim", "Berners-Lee"))
console.log(generateUniqueID("Ted", "Nelson"))



//test cases for addAccount
console.log(addAccount(["Allan","Turing","aturing@w3c.com",58]))
console.log(addAccount(["Tony","Stark","ironMan@avengers.com",49]))
console.log(addAccount(["Tim","Berners-Lee","tim@w3c.com",25]))
console.log(addAccount(["Ted","Nelson","ted.n@w3c.com",43]))

//non working case
console.log(addAccount(["Peter","Parker","spidey@marvel.com",16]))      //age less than 18
console.log(addAccount(["Parker","spidey@marvel.com",20]))              //missing entry (first name)
console.log(addAccount(["Peter","","spidey@marvel.com",20]))            //Last name is an empty string
console.log(addAccount(["Peter","Parker","spidey@marvelcom",20]))       //invalid email