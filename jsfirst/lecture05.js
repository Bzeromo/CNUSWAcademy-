/*
    함수
    - '호출'하면 함수가 해당 기능을 실행하고 결과값을 반환
*/

function 함수이름 (인자, 인자) {
    /*
        실행할 코드
    */
    return 결과값;
}

// return 값이 없어 undefined가 출력, return 아래의 구문은 실행되지 않는다
function return_test() {
    return;
    console.log("실행되지않는코드");

}

// return 값은 그대로 undefined, console.log는 실행
function print(message) {
    console.log("print function in");
    console.log(message);
    console.log("print function out");
}

// 인자를 이용해 덧셈 연산을 진행하고 해당 결과를 return 값으로 반환
function sum(arg1, arg2) {
    var result = arg1 + arg2;
    return result;
}