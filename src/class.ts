/**
 * 函数声明 
 */
function sum(x: number, y: number): number {
  return x + y;
}

/**
 * 变量声明，需要在变量后面跟上类型才能启用检查 
 */
let variableSum: (x: number, y: number) => number = function(x: number, y: number): number {
  return x + y;
}

interface Func {
  (x: number, y: number): number;
}

/**
 * 接口声明 
 */
let interfaceSum: Func = function(x, y) {
  return x + y;
}

/**
 * 虽然我们可以给变量赋联合类型，输出也赋联合类型来实现重载，但是不优雅
 * 可以采用如下的方法
 * 前面两次是函数定义，最后一次是函数实现
 */
function reverse(x: number): number;
function reverse(x: string): string;
function reverse(x: number | string): number | string {
  if (typeof x === 'number') {
    return Number(x.toString().split('').reverse().join(''));
  } else {
    return x.split('').reverse().join('');
  }
}


class Student {
  private name; // 私有属性，不能被子类访问
  protected age; // 保护属性，可以在子类中被访问
  public school; // 公有属性，可以在任何地方访问
  public constructor(name, age, school) {
    this.name = name;
    this.age = age;
    this.school = school;
  }
}

class FreshMan extends Student {
  public constructor(name, age, school) {
    super(name, age, school);
    // console.log(this.name); 
  }
}


/**
 * ts中的抽象类
 */
abstract class Animal {
  public name;
  public constructor(name) {
    this.name = name;
  }
  public abstract sayHi();
}

class Cat extends Animal {
  public sayHi() {
    console.log(`Meow, My name is ${this.name}`);
  }
}

let cat = new Cat('Tom');