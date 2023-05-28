const reg = /"(\w+)":\s*([^,]+)(?=,|$)/g;

const result = [...'{"a": 1, "b": "2"}'.matchAll(reg)];

console.log(result); // [['"a": 1', 'a', '1'], ['"b": "2"', 'b', '"2"']]
