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




