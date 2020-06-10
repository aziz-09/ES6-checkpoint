let pets = [
    { name: "Max", type: "dog", bornOn: 2018 },
    { name: "Angel", type: "cat", bornOn: 2015 },
    { name: "Jasper", type: "dog", bornOn: 2016 }
];

//   function getAge(pet) {
//     return new Date().getFullYear() - pet.bornOn;
//   }

const getAge = (pet) => new Date().getFullYear() - pet.bornOn;

//var petsWithAge = [];
// for (var i = 0; i < pets.length; i++) {
//var pet = pets[i];
//  pet.age = getAge(pet);

//  petsWithAge.push(pet);

//console.log(petsWithAge);

let petsWithAge = []
pets.forEach(pet => {
    pet.age = getAge(pet);
    petsWithAge.push(pet);
})

console.log(petsWithAge);








//var dogs = [];
//for (var i = 0; i < pets.length; i++) {
// var pet = pets[i];
// if (pet.type === "dog") {
//   dogs.push(pet);
// }
let dogs = pets.filter(element =>
    element.type === "dog");
console.log(dogs)

//}
//console.log(dogs);

//var jasper;
//for (var i = 0; i < pets.length; i++) {
// var pet = pets[i];
//  if (pet.name === "Jasper") {
//   jasper = pet;
//  }
//}
//console.log("Jasper is " + jasper.age + " years old");


let jasper = pets.find(identity => {
    return identity.name == "Jasper"
});

console.log(`Jasper is ${jasper.age}  years old `);
