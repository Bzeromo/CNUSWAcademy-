/*
    반복문

    while문
        - while (조건식) { 코드 }
        - 조건식이 참이면 코드가 작동
        - 조건식이 만족되지 않을 때까지 코드가 계속 반복됨
        - continue문은 반복문의 맨 위로 돌아가 작동함
        - break 구문은 반복문을 빠져나가게 함

    do while문
        - do 안에 들어있는 코드를 한번 실행 후 while문의 조건에 따라 반복 여부를 결정

    for문
        - for(초기화 구문; 조건식; update 구문) { 코드 }
        - 초기화 코드는 항상 실행됨
        - 조건식이 참이 아니면 코드 반복이 멈춤
        - continue문을 만나면 update 구문 실행으로 올라감

    for in 문
        - 객체의 속성의 이름을 for in 문을 이용하여 추출할 수 있다
        - 추출한 이름은 초기화문으로 선언한 변수에 들어간다

    변수의 scope
        - 뱐수의 scope는 함수의 scope를 따른다
        - 객체(변수)는 선언된 함수 안에서만 접근이 가능하다

    변수의 shadowing 
        - 함수 안에서 선언한 변수는 함수 안에서 사용할 때 함수 밖에서 선언한 변수로 사용되지 않는다
        - 함수 밖에서 선언한 변수는 함수 안에서 사용해도 변경되지 않는다
    
    method
        - 객체에서 함수를 호출할 때 부르는 방식
        - this: 함수가 불렸을 때 어떤 객체에 바인드된 속성으로서 불렸는지 알 수 있게 함
        - 일반적인 함수를 호출할 때, 해당 함수 내부에서 사용된 this는 전역객체에 바인딩된다. (브라우저: window객체)

    closure
        - 함수와 environment로 구성
*/

var obj = {
    name:"dd",
    arr:[1,2,3],
    obj:{pr:4}
}

var property_list = Object.keys(obj);
console.log("Property List: ", property_list);

for(var i=0; i<property_list.length;i++) {
    var proName = property_list[i];
    console.log("\t", proName, ": ", obj[proName]);
}

console.log("\n\nFor in");

for(var proName in obj) {
    console.log("\t", proName, ": ", obj[proName]);
}

function shadowing_ex() {
    var val =0;
    console.log("F", val);
    val++;
}

var val=0;
shadowing_ex();
console.log("O", val);

function f() {
    console.log(this);
    console.log("f is called")
}

function setName(name) {
    this.name = name;
}

var o = {name:"obj", method:f, setName:setName};
var o2 = {name:"", setName:setName};

o.setName("객체1");
o2.setName("객체2");

f();
o.method();
console.log(o,o2);

function makeCounterFunc(initVal) {
    var count = initVal;
    function Increase() {
        count++;
        console.log(count);
    }

    return Increase;
}

var counter1 = makeCounterFunc(0);
var counter2 = makeCounterFunc(10);

counter1();
counter2();