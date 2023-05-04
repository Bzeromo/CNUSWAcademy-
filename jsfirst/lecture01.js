// 기본 자료형
var a =100, b = 3.14;  // number
var c = "안녕하세요", d="a";  // String
var e = true, f=false;  // boolean

// 변수의 type을 확인할 수 있는 typeof()
console.log(a, typeof(a));
console.log(c, typeof(c));
console.log(e, typeof(e));

/* 
    Number
    - 정수와 실수를 모두 포함한다.
    - 지수 표기법을 사용할 수 있다.
    - 자바스크립트는 64진수까지 표현 가능 (10의 19승)
*/

// prompt는 입력받은 값을 문자열로 저장한다.
var height = prompt("키를 입력해 주세요.");
console.log(height, typeof(height));

// 문자열을 정수로 바꿔주는 parseInt
var height_int = parseInt(height);
console.log(height_int, typeof(height_int));

// 문자열을 실수로 바꿔주는 parseFloat
var height_float = parseFloat(height);
console.log(height_float, typeof(height_float));

// parseInt 와 parseFloat는 앞에서부터 숫자로 인식하기 때문에 입력값이 문자로 시작되면 NaN 값이 뜸 (Not a Number)
// 1/0 과 같은 경우 Infinity로 뜸