console.log("Hello, TypeScript");

function add(a: number, b:number) {
    return a + b;
}
const sum = add(2, 3);
console.log(sum);

let muted: boolean = true;

// arreglos

let people: string[] = [];
people = ["Isabel", "Nicole", "Maria"];

people.push("Leo");

let peopleAndNumbers: Array<string | number> = [];
peopleAndNumbers.push("Leo");
peopleAndNumbers.push(89);

// enum
enum Color {
    Rojo = "Rojo",
    Verde = "Verde",
    Azul = "Azul"
}
let colorFavorite: Color = Color.Azul;
console.log("My color favorite is: "+colorFavorite);

// any
let commodin: any = "jocker";
commodin = { type: 5 };

// object
let someObject: object = { age: 5 };

// funciones
function createAdder(a: number): (number) => number {
    return function(b: number) {
        return b + a;
    }
}

const addFour = createAdder(4);
const fourPlus6 = addFour(6);

// funciones con parametros opcionales: lastName?: string
function fullName(firstName: string, lastName: string = 'Smith'): string {
    return `${firstName} ${lastName}`;
}
const user = fullName('Agente');
console.log(user);

// Interfaces
interface Rectangulo {
    ancho: number,
    alto: number
    color?: Color
}

let rect: Rectangulo = {
    ancho: 4,
    alto:4,
    color: Color.Azul
}

function area(r: Rectangulo): number{
    return r.ancho * r.alto;
}

const areaRect = area(rect);
console.log(areaRect);

rect.toString = function() {
    return this.color ? `Un rectangulo ${this.color}` : `Un rectangulo`;
}
console.log(rect.toString());