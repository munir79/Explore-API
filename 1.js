//1. declare a json(javascript object notation)

const user={
    id:1,
    name:"Munir",
    job:'student',
    age:'22'
}
const stringify=JSON.stringify(user);
console.log(stringify);
// output :{"id":1,"name":"MUnir","job":"student","age":"22"}

//2. JSON.parse  (string to object)
const strobj=JSON.parse(stringify);

console.log(strobj);
