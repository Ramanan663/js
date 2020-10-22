const array = [
    { name: "N. Armstrong", profession: "spacecowboy", age: 89 },
    { name: "H. de Haan", profession: "kippen hypnotiseur", age: 59 },
    { name: "A. Curry", profession: "kikvorsman", age: 32 },
    { name: "F. Vonk", profession: "slangenmelker", age: 36 },
    { name: "B. Bunny", profession: "konijnen uitlaatservice", age: 27 },
    { name: "Dr.Evil", profession: "digital overlord", age: 56 },
];

//for (person = 0; person < array.length; person++) {
for (person of array) {
    // console.log(array[person]);
    // console.log("dit is gehele persoon : ", person);
    // console.log("dit is de naam : ", person.name);
    // console.log("dit is de geboortejaar :", 2020 - person.age);
    // console.log("naam : ", person.name, ",  Beroep :", person.profession);
    if (person.age > 50) {
        console.log("hij is boven 50  -", person.name);
    } else {
        console.log("hij is jonger dan 50  -", person.name);
    }
}

//}
/*
//map
//find
const pass = array.find((item) => {
    return item.name === "B. Bunny";
});
console.log(pass);
//foreach
array.forEach((e) => {
    console.log(e.name);
});

const total = array.reduce((ageTotal, e) => {
    return e.age + ageTotal;
}, 0);
console.log(total);
array.forEach((e) => {
    console.log("Dit is de gehele persoon:", [e.name]);
}); */