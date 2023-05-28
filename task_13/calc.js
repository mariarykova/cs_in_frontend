const str = `
Какой-то текст (10 + 15 - 24) ** 2
Еще какой то текст 2 * 10
`;

const reg = /[(|\d][\d\s\+\-\*\*\)]+\d/gm;

const res = str.match(reg);

function calc(str) {
  const result = str.replace(reg, (str) => eval(str));

  return console.log(result);
}

console.log(res);

calc(str);
