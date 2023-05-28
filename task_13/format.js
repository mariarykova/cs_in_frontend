const reg = /\${([^}]+)}/g;

function format(str, obj) {
  const result = str.replace(reg, (_, $1) => {
    return obj[$1];
  });

  console.log(result);
}

format("Hello, ${user}! Your age is ${age}.", {
  user: "Bob",
  age: 10,
});
