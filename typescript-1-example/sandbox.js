var firstName = "Debjit";
console.log(firstName);
var lastName = "Saha";
console.log(lastName);
console.log(typeof lastName);
var date = new Date();
document.write("<h1>".concat(date.getHours(), ":").concat(date.getMinutes(), ":").concat(date.getSeconds(), "</h2>"));
// Filter
var a = [1, 9, 2, 8, 3, 7, 4, 6, 5];
var b = a.filter(function (ele) { return ele < 6; });
console.log(b);
// Map
var c = [1, 2, 3, 4, 5];
var d = c.map(function (ele) { return ele * ele; });
console.log(d);
// Reduce
var e = [1, 2, 3, 4, 5];
var f = e.reduce(function (ele1, ele2) { return ele1 + ele2; });
console.log(f);
var add = function (a, b) { return a + b; };
console.log(add(1, 2));
