interface StuParam {
  name: string;
  age?: number;
  readonly mother?: string;
  [propName: string]: any; // 还存在很多其他的变量
}

function stu(stuParam: StuParam) {
  console.log(stuParam);
}

// 将对象赋值为一个变量，这样就能绕过多余属性的检查
const s = {
  name: 'mickey',
  age: 21,
  school: 'bupt',
};

stu(s);