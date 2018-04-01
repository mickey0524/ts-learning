function createArray<T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

console.log(createArray(3, 'x')); // ['x', 'x', 'x']

function swap<T, U>(tuple: [T, U]): [U, T] {
  return [tuple[1], tuple[0]];
}

console.log(swap([7, 'seven'])); // ['seven', 7]

function copyFields<T extends U, U>(target: T, source: U): T {
  for (let id in source) {
    target[id] = (source as T)[id];
  }
  return target;
}

let x = { a: 1, b: 2, c: 3, d: 4 };

console.log(copyFields(x, { b: 10, d: 20 }));

/**
 * 泛型插入接口
 */
interface CreateArrayFunc {
  <T>(length: number, value: T): Array<T>;
}

let createArrayFunc: CreateArrayFunc;
createArrayFunc = function <T>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

console.log(createArrayFunc(3, 'x'));

/**
 * 泛型的默认值
 */
function createArrayDefault<T = string>(length: number, value: T): Array<T> {
  let result: T[] = [];
  for (let i = 0; i < length; i++) {
    result[i] = value;
  }
  return result;
}

