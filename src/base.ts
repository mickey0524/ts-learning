/**
 * 枚举，默认变量是从0开始递增的，可以单独赋值
 */
enum Color { Red = 0, Green, Blue }
let green: Color = Color.Green;
console.log(typeof green, green);
let str: string = Color[2];
console.log(typeof str, str);

/**
 * 常数枚举，不能带计算所得值
 */
const enum Directions {
  Up,
  Down,
  Left,
  // Right = 'asde'.length
  Right,
}

let directions = [Directions.Up];

declare const enum Direction {
  Up,
  Down,
  Left,
  Right
}

let direction = [Direction.Up];

/**
 * ts会对变量做类似强类型一样的类型检测
 * 当想在ts中使用脚本语言的弱类型性质的时候，可以使用any类型
 */
let num: any = 2;
num = 'asdasd';
let anyArr: any[] = [1, 'asd', false];
console.log(anyArr);

let numArr: Array<number> = [1, 2, 3] // 利用泛型定义数组

interface InterfaceArr {
  [index: number]: string|number;
}

let interfaceArr: InterfaceArr = [1, 2, 'asd']; // 利用接口定义数组 

// undefined是number的子集，如果不配置strictNullChecks：true是可以赋值
// let n: number = undefined;

// 类型推论，如果不设置变量的类型，ts会进行类型推论
let str1 = 'i am a string'; // 如果不赋值，会被推论成any
// str1 = 1; 类型推论成str，不能赋值为number

/**
 * js中没有类似python中元组一样的类型，ts中补齐了这一点
 */
let tuple: [string, number] = ['asd', 1];
tuple.push('asd');
tuple.push(1);
// tuple.push(false); tuple中越界的元素只能被赋值为已知类型的联合类型
// 同时需要注意的是，访问越界函数的时候也只能访问联合类型的共同属性
