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