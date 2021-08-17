// var msg: string = "Bonjour";
// console.log(typeof msg);

// function direBonjour(nom: string) {
//     console.log("Bonjour" + nom);
// }

// direBonjour(2);

// var b: boolean = true;
// var i: number = 2;

// var str1: string = "Wick";
// var str2: string = 'John';

// var str3: string = `Bonjour ${ str2 } ${ str1 }
// Que pensez-vous de TypeScript ?
// `;
// console.log(str3); 

// var list: number[] = [1, 2, 3];
// int [] list
// list[0] = 5;

// var t: [number, string, string, string] = [100, "Wick", 'John', ''];
// t[3] = "Bonjour";
// console.log(t[0]);

// var t: [number, string, string, string?] = [100, "Wick", 'John'];
// t[3] = "Bonjour";
// console.log(t[3]);

// var x: any;
// x = "bonjour";
// x = 2;
// x = true;
// console.log(x);

// var b: boolean = x;
// console.log(b);

// enum mois {
//     JANVIER=1, FEVRIER, MARS, AVRIL, MAI, JUIN, JUILLET,
//     AOUT, SEPTEMBRE, OCTOBRE, NOVEMBRE=1, DECEMBRE
// };
// console.log(mois.AOUT);
// console.log(mois.FEVRIER);
// console.log(mois.DECEMBRE);

// var obj: {
//     nom : string;
//     numero : number;
// };
// obj = {
//     nom : "Wick",
//     numero : 100
// };
// console.log(obj["nom"], obj.numero);

// var stringOrNumber: string | number;

// stringOrNumber = 10;
// stringOrNumber = "Bonjour";
// stringOrNumber = true;

// let x = "2";
//let y = +x; // OU
//let y = parseInt(x); // OU
// let y = Number(x); // String, Boolean...

// type maStructure = [number | boolean, string, string];
// let y : maStructure = [10, "Wick", "John"];
// console.log(y);
// y[0] = true;
//y[0] = "Hello"; // Erreur !

// var objet = { nom : "Wick", prenom : "John", num: 500};
// if (objet.num == undefined || objet.num == null) {
//     objet.num = 100;
// } OU
// objet.num = objet.num ?? 100;
// console.log(objet);

// var objet = { nom : "Wick", prenom : "John", num: 500};

// Décomposition, destructuration
// let { nom, prenom, num } = objet;
// console.log(nom, prenom);

// const PI = 3.14;
//PI = 5; // Erreur !

// function somme(a: number, b: number): number {
//     return a + b;
// }
// let resultat: number = somme(5, 7);
// console.log(resultat);

// function direBonjour(): void{
//     console.log('Bonjour !');
// }

// function jamais(): never {
//     while(true) {
//         console.log("hi");
//     }
// }

// function somme(...params: number[]): number {
//     let result: number = 0;
//     for(let elt of params) {
//         result += elt;
//     }
//     return result;
// }
// console.log(somme());
// console.log(somme(5));
// console.log(somme(5, 10));
// console.log(somme(5, 10, 30));
// console.log(somme(5, 10, 30, 100, -9));

// function totalCaracteres(...params: string[]): number {
//     let result: number = 0;
//     for(let elt of params) {
//         result += elt.length;
//     }
//     return result;
// }

// console.log(totalCaracteres("bon", "jour"));
// console.log(totalCaracteres("bon", "jour", "hello"));
// console.log(totalCaracteres("bon", "jour", "hi", "ciao"));

// function sommeDeTout(...params: (string | number) []): number {
//     let result: number = 0;
//     for(let elt of params) {
//         if(typeof elt === "number"){
//             result += elt;
//         } else {
//             result += elt.length;
//         }
//     }
//     return result;
// }

// console.log(sommeDeTout("bon", "jour", 5, 'hi'));
// console.log(sommeDeTout("hello") );
// console.log(sommeDeTout(10, "bon", "jour", "hi", "ciao", 2) );

// function optionalParams(str: string, nbr?: number): number {
//     if (nbr) {
//         return nbr + str.length;
//     }
//     return str.length;
// }

// console.log(optionalParams("Bonjour", 2));
// console.log(optionalParams("Bonjour"));

// function operation (num1: number, num2: number, op?: string): number {
//     if (op) {
//         return eval (num1 + op + num2);
//     }
//     return num1 + num2;
// }

// function operation (num1: number, num2: number, str?: string): number {
//     if(!str) {
//         return num1 + num2;
//     } else if(str === "-") {
//         return num1 - num2;
//     } else if(str === "*") {
//         return num1 * num2;
//     } else if(str === "/") {
//         return num1 / num2;
//     } else {
//         return num1 + num2;
//     }
// }

// console.log(operation(2, 3, "+"));
// console.log(operation(2, 3, "*"));
// console.log(operation(2, 3, "-"));
// console.log(operation(2, 3, "/"));
// console.log(operation(2, 3, "a"));
// console.log(operation(2, 3));

// FONCTION ANONYME
// let somme = function (a: number, b: number): number{
//     return a + b;
// }

// FONCTION FLECHEE (ARROW FUNCTION)
// let somme = (a: number, b: number): number => a + b;

// console.log(somme(2, 3));

// let maximum = (a: number, b: number): number => {
//     if (a > b)
//         return a;
//     return b;
// }

// let maximum = (a: number, b: number): number => a > b ? a : b;

// console.log(maximum(4,7));

//  let tab = [2, 3, 5, 8];

// for (let elt of tab) {
//     console.log(elt);
// }
// tab.forEach(elt => console.log(elt));

// tab.forEach(elt => {
//     if (elt > 4) 
//         console.log(elt);
// });

// tab.map(elt => elt + 6)
//     .forEach(elt => console.log(elt));

// tab.filter(elt => elt > 4)
//     .map(elt => elt + 6)
//     .forEach(elt => console.log(elt));

// let somme = tab.reduce((prec, next) => prec += next);
// console.log(somme);

// let voitures = ["Fiat", "Peugeot", "Ford", "Mercedes"];

// voitures.map(elt => elt.length)
//     .forEach(elt => console.log(elt));

// voitures.map(elt => elt[0])
//     .forEach(elt => console.log(elt));

// voitures.filter(elt => elt.length > 4)
//     .map(elt => elt.toUpperCase())
//     .forEach(elt => console.log(elt));

// let somme = voitures.map(elt => elt.length)
//     .reduce((prec, next) => prec += next);
// console.log(somme);

// let somme = voitures.reduce((prec, next) => prec += next)
//     .length;
// console.log(somme);

// let somme = voitures.reduce((prec, next) => prec += next.length, 0);
// console.log(somme);

// DECOMPOSITION
// let objet = {nom: "Wick", prenom: "John"};
// let objet2 = objet;
// let objet3 = {...objet };
// objet2.nom = "Travolta";
// objet3.nom = "Shepard";

// console.log(objet);
// console.log(objet2);
// console.log(objet3);

// function somme (a?: number, b?: number, c?: number): number {
//     return a + b + c;
// }
// let notes: number[] = [2, 3, 5];
// console.log(somme(...notes));

// let notes2: number[] = [2, 3];
// console.log(somme(...notes2, 0));

// LES PROMESSES

// var test = true;

// Déclaration
// var promesse = new Promise<void>((resolve, reject) => {
//     if (test)
//         resolve();
//     else
//         reject();
// });

// Utilisation
// promesse.then(() => console.log("test réussi"))
//     .catch(() => console.log("erreur"));

// var division = (a: number, b: number) => {
//     return new Promise((resolve, reject) => {
//         if (b != 0)
//             resolve(a / b);
//         else
//             reject("erreur : division par zéro");
//     });
// };
// division(10, 2).then((res) => console.log("résultat : " + res))
//     .catch((error) => console.log(error));

// division(5, 0).then((res) => console.log("résultat : " + res))
//     .catch((error) => console.log(error));

// console.log("fin");

// let somme = async (a: number, b: number) => a + b;
// somme(2, 3).then(result => console.log(result));

// let somme = (a: number, b: number) => {
//     return new Promise((resolve) => {
//         setTimeout(() => { resolve(a + b) }, 2000);
//     });
// };

// let sommeCarre = async (a: number, b: number) => {
//     let s: number = 0;
//     await somme(a, b).then(result => s = result as number);
//     let result = Math.pow(s, 2);
//     return result;
// };

// sommeCarre(2, 3).then(result => console.log(result));

// LES MODULES
// JS : importer élément à utiliser
// on ne peut importer que ce qu'on a exporté
// import { somme } from "./fonctions";
// import { produit } from "./fonctions";

// console.log(somme(2, 3));
// console.log(produit(2, 3));

// import {somme as s, produit as p} from "./fonctions";

// console.log(s(2, 3));
// console.log(p(2, 3));

// import * as f from "./fonctions";

// console.log(f.somme(2, 3));
// console.log(f.produit(2, 3));

// console.log(f.s(2, 3));
// console.log(f.p(2, 3));

// import('./fonctions')
//     .then((module) => {
//         console.log(module.s(2, 5));
//         console.log(module.p(2, 5));
//     });

// import s, {produit as p} from "./fonctions";

// console.log(s(2, 3));
// console.log(p(2, 3));

// LES CLASSES
// import { Personne } from "./personne";
// import { Adresse } from "./adresse";

// let personne: Personne = new Personne();
// personne.nom = "Wick";
// personne.prenom = "John";
// personne.num = 100;

// let adresse: Adresse = new Adresse ("20 Boulevard Saint-Germain", "Paris", "75006");
// let adresse2: Adresse = new Adresse ("18 rue Jean Jaurès", "Brest", "29200")
// let adresses: Adresse[] = [adresse, adresse2];

// personne.adresse = adresses;

// console.log(personne.nom, personne.prenom, personne.num, personne.adresse);

// let personne2: Personne = new Personne(200, "Travolta", "John");

// console.log(personne2.nom, personne2.prenom, personne2.num, personne2.adresse);

import { Person } from "./person";

let person: Person = {
    num: 100,
    nom: "Wick",
    prenom: "john"
};
console.log(person);

let person2: Person = {
    nom: "Wicky"
}
console.log(person2);