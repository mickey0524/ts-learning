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