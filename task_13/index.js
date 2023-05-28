const reg = /[\w\$_]/;

console.log(reg.test("привет")); // false
console.log(reg.test("]")); // false
console.log(reg.test("hello")); // true
console.log(reg.test("$")); // true
console.log(reg.test("123")); // true
console.log(reg.test("_")); // true

const myRegExp = new RegExp(/,[\d],[\d]+;/);

console.log(
  "762120,0,22;763827,0,50;750842,0,36;749909,0,95;755884,0,41;".split(myRegExp)
); // ['762120', '763827', '750842', '749909', '755884']
