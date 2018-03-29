class Stu {
  name: string;
  age: number;
  constructor(name: string, age: number) {
    this.name = name;
    this.age = age;
  }
  
  getName() {
    return this.name;
  }

  setName(name) {
    this.name = name;
  }
  
}

const baihao = new Stu('baihao', 22);
console.log(baihao.getName());
baihao.setName('baihao.01');
console.log(baihao.getName());
