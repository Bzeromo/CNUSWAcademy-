/*
    문자열.length; (문자열["length"];)
    - 문자열의 길이를 알 수 있음

    문자열.concat(문자열2);
    - 문자열 2개를 붙임
    - '문자열문자열2'
    - + 기호를 이용해 붙이는 방법도 존재함
    - + 기호를 붙이는 경우에는 숫자도 문자열로 변환하여 붙여줌
*/

var str = "Hello";
str.length;

var str2 = "world";
str.concat(str2);

var str3 = str.concat(str2).concat("!");
"Hello".concat(" World").concat("!");
"hello".length;

str + str2;
"Pi is " + 3.14;

/*
    문자열.charAt(n);
    - 문자열의 n번째 index에 위치한 글자를 반환
    - 문자열의 범위를 넘어가거나 음수를 넣으면 빈 칸이 반환
    - 문자열[n];도 같은 역할이지만 범위를 넘어가면 charAt과 다르게 undefined가 반환

    문자열.substring(n,f);
    - index n번째 글자부터 f번째 이전 글자까지 반환
    - 문자열.substr의 경우 n에서 부터 길이 f인 문자열을 반환
    - substring(n)의 경우 n번째부터 문자열 반환
    - 음수를 넣으면 뒤에서부터 n번째부터 문자열 반환

    문자열.indexOf();
    - 인자가 문자열안에서 제일 먼저 등장하는 곳의 인덱스를 반환
    - lastIndexOf는 제일 나중에 등장하는 곳의 인덱스를 반환
    - 없는 문자열일 경우 -1을 반환
*/

str.substr(2,4);
str.substring(-1);

str.indexOf("el");
str.lastIndexOf("l");
str.lastIndexOf("나");

/*
    배열
    - 대괄호를 이용하여 정의
    - ex) var arr=[];
    - , 로 구분하여 여러개의 요소를 저장할 수 있음
    - 배열 안에 들어가는 요소는 어떤 자료형이든 상관없으며 한 배열 안에 여러개의 자료형의 요소가 들어갈 수 있음
    - arr.length를 이용하여 배열의 길이 반환 가능
    - 대괄호를 이용하여 n번째 인덱스에 저장된 요소 반환 가능
    - ex) arr[1];
    - 배열의 크기를 넘어간 인덱스에 저장된 요소를 반환하려 하면 undefined가 반환

    pop, push, shift, unshift
    - pop: 배열의 가장 마지막 요소를 빼서 반환
    - shift: pop과 반대로 가장 첫 요소를 빼서 반환
    - push: 배열의 맨 뒤에 인자로 들어간 요소를 넣는다
    - unshift: push와 반대로 맨 앞에 요소를 넣는다

    reverse
    - 배열을 거꾸로 뒤집는다

    sort
    - 배열을 순서대로 정렬한다

    배열도 문자열처럼 concat, indexOf 등이 가능하다.

    split
    - 문자열을 분해하여 배열 안에 넣는다
    - 구분자 문자열을 기준으로 문자열을 분해한다
*/

var arr = [1, true, 3.14, "String", {name:"object"}, [1,2,3]];

arr.pop();
arr.shift();
arr.sort();

str.split("");