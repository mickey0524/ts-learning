interface StuParam {
  name: string;
  age?: number;
  readonly mother?: string; // 只读属性
  [propName: string]: any; // 还存在很多其他的变量, 一旦定义了任意属性, 那么确定属性和可选属性都必须是它的子属性
}

function stu(stuParam: StuParam) {
  // stuParam.mother = 'asdasd';
  console.log(stuParam);
}

// 将对象赋值为一个变量，这样就能绕过多余属性的检查
const s = {
  name: 'mickey',
  age: 21,
  school: 'bupt',
  mother: 'asd',
};

stu(s);

interface NumberDictionary {
  [index: string]: string|number;
}

const obj: NumberDictionary = {
  name: '白皓',
};

/**
 * 用接口来表示一个函数
 */
interface SearchFunc {
  (source: string, subString: string): boolean;
}

let mySearch: SearchFunc;
mySearch = function (source: string, subString: string) {
  return source.search(subString) !== -1;
}

/**
 * 有时候，一个函数还可以有自己的属性和方法
 */
interface Counter {
  (start: number): string;
  interval: number;
  reset(): void;
}

function getCounter(): Counter {
  let counter = <Counter>function (start: number) { };
  counter.interval = 123;
  counter.reset = function () { };
  return counter;
}

let c = getCounter();
c(10);
c.reset();
c.interval = 5.0;

// 接口之间的继承，同样可以多重继承
interface Shape {
  color: string;
}

interface PenStroke {
  penWidth: number;
}

interface Square extends Shape, PenStroke {
  sideLength: number;
}

const square = {} as Square;
square.color = 'red';
square.sideLength = 10;
square.penWidth = 5.0;

/**
 * 类可以实现接口，在OO的世界里，万物都是对象，虽然可以通过继承获得一些
 * 性质上的复用，但是ts中一个类只能继承一个类，而可以把一切功能性的函数
 * 抽离出来，封装成接口，然后类去实现借口，实现功能复用，而且类可以同时
 * 实现多个接口
 */
interface Alarm {
  alert();
}

class Door {
}

class SecurityDoor extends Door implements Alarm {
  alert() {
    console.log('SecurityDoor alert');
  }
}

class Car implements Alarm {
  alert() {
    console.log('Car alert');
  }
}