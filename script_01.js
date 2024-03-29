"use strict";

/***** Funktionen 01 *****/

// 1. Kapselung von Codeblöcken//

//Funktionsaufruf (call) // kann auch vor der eigentlichen Kapselung stehen
// test();

//Funktionsrumpf (body) / callee
function test()
{
console.log("Hallo Thilo");
}
// Funktionsaufrauf (call)
test();

//            FUNKTIONEN 02a                  //
console.log("----------------------FUNKTIONEN 02a--------------------------------------");

// ausgabeNamen();                 //call


// function ausgabeNamen()
//          //callee 
// {
// console.log("Hallo " + "Anna" + "!");   

//Refactoring 
//Außen (Ausgabe) bleibt gleich, nur der Code innen wird geändert

// console.log("Hallo Anna!") bringt die gleiche Ausgabe wie console.log("Hallo " + "Anna" + "!")

//Parametrisierung der Name wird durch eine Variable dargestellt
ausgabeNamen();
function ausgabeNamen()

{
let firstName = "Anna";
console.log("Hallo " + firstName + "!");
}
//Die Variable firstName ist NUR innerhalb der Funktion gültig (scope)//

//                  FUNKTIONEN 02b                         //
console.log("-----------------2b Parametrisierung + Datenübergabe von Außen----------------");

// 

//Lösung Sebastian Plag

// function ausgabeNamenParam(firstName) {

// console.log("Hallo " + firstName + "!");

//     if (firstName=== ""){   //strict equality === es wird auf Inhalt UND Datentyp verglichen

//         console.log("Keine Eingabe");

//     } else{

//         console.log("Hallo " + firstName + "!");

//     }

   

// }
       

// ausgabeNamenParam("Riccardo");  //Argumente (args) = "Riccardo" - Daten für Parameter
// ausgabeNamenParam("Anna");
// ausgabeNamenParam(prompt("Name?:")); //Usereingabe des Arguments für die Funktion ausgabeNamenParam)

// Lösung Peter Schmidt

// function ausgabeNamenParam(firstName) {
    // Konditionen für die Entscheidungsstruktur (Conrol Flow) wird erstellt
//     const cond1 = (firstName == "");
//     const cond2 = (firstName == undefined);

//     if (cond1 || cond2) { //cond1 || (ODER) cond1 sind TRUE = firstName wird in "nobody geändert"
//         firstName = "nobody";
//     }

//     console.log("Hallo " + firstName + "!");

// }

// ausgabeNamenParam("Riccardo");  //Argumente (args) = "Riccardo" - Daten für Parameter
// ausgabeNamenParam("Anna");
// ausgabeNamenParam(prompt("Name?:")); //Usereingabe des Arguments für die Funktion ausgabeNamenParam)


//                    mehrere Parameter              //
// 2c mehrere Parameter//

// function ausgabeNamenParams(firstName, lastName) 
// {
//     console.log("Hallo " + firstName + " " + lastName + " !"); //String composing (zusammensetzen)

// }
// ausgabeNamenParams("Maxine", "Mütze"); 

// ausgabeNamenParams(prompt("Vorname"),prompt("Nachname"));

//           FUNKTIONEN 03a             //
// 03a Vorbereitung //
//---------one function = one job (uncle Bob)----------------//
//SRP single responsible principle


function ausgabeNamenParams2(firstName, lastName) 
{
    // 1. Funktionalität : string composing
    const gap = " ";
    const outputStr = "Hallo" + gap + firstName + gap + lastName + "!" 
    // 2. Funktionalität: data output
    console.log(outputStr);

}


// ausgabeNamenParams2("Maxine","Matze");

// Funktionen 03b//

//trennen der einzelnen Funktionen

//1. Funktionalität: String composing
output(getString("Maxine", "Mützke"))

function getString(firstName, lastName) {
    const gap = " ";
    const outputStr = "Hallo" + gap + firstName + gap + lastName + "!"   
    return outputStr; //Daten werden zum Call geschickt 
    console.log("Hi");
}

// 2. Funktionalität: Data output
// ausgabe("Hallo");
function output(outputData) {
        console.log(outputData);
}

