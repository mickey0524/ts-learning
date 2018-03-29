/**
 * 枚举，默认变量是从0开始递增的，可以单独赋值
 */
enum Color { Red = 0, Green, Blue }
let green: Color = Color.Green;
console.log(typeof green, green);
let str: string = Color[2];
console.log(typeof str, str);

/**
 * ts会对变量做类似强类型一样的类型检测
 * 当想在ts中使用脚本语言的弱类型性质的时候，可以使用any类型
 */
let num: any = 2;
num = 'asdasd';
let anyArr: any[] = [1, 'asd', false];
console.log(anyArr);

