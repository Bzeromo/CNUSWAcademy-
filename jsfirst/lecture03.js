/*
    undefined, null
    - "값이 없다"
    - 변수를 선언하고 초기화하지 않거나 객체에 없는 속성에 접근하면 undefined로 표시
    - null은 비어있는 '객체'
*/

var uninit_var;
console.log(uninit_var);

var obj = {
    x:1,
    y:2
}
console.log(obj.z);

// 값은 null, 자료형은 object로 표시됨
var null_var;
null_var=null;
console.log(null_var);
console.log(typeof(null_var));