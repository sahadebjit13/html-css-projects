var firstName = "Debjit"
console.log(firstName)
var lastName = "Saha"
console.log(lastName)
console.log(typeof lastName)
var date = new Date()
document.write(`<h1>${date.getHours()}:${date.getMinutes()}:${date.getSeconds()}</h2>`)
// Filter
let a = [1,9,2,8,3,7,4,6,5]
let b = a.filter((ele) => ele < 6)
console.log(b)
// Map
let c = [1,2,3,4,5]
let d = c.map((ele) => ele*ele)
console.log(d)
// Reduce
let e = [1,2,3,4,5]
let f = e.reduce((ele1,ele2) => ele1+ele2)
console.log(f)
const add = (a:number, b:number) => a+b
console.log(add(1,2));
