var a=1, b=2, c=3, d=4;
var e ="a", f="b", g="c", h="d";

// 관계연산자 (결과 값이 boolean형으로 반환)
// 대소연산
console.log(a<b);
console.log(a>b);
console.log(a<=b);
console.log(a>=b);

// 비교연산
console.log(a==b);
console.log(a==a);
console.log(a!=a);
console.log(a!=b);

// 문자열의 경우 사전순으로 연산
console.log(e==e);
console.log(e==f);
console.log(e>f);
console.log(e<f);

// and 연산
console.log(true&&true);
console.log(true&&false);
console.log(false&&false);
console.log(false&&true);

// or 연산
console.log(false||true);
console.log(false||true);
console.log(false||true);
console.log(false||true);

// not 연산
console.log(!true);
console.log(!false);

/*
수학에서 곱하기를 더하기보다 먼저 계산하는 것 처럼, Javascript에서도 연산자에 우선순위가 존재.

우선순위 순으로 정리한 연산자
++, --
!
*, /, %
+, -
<, <=, >, >=
==, !=
&&
||


    괄호
    -우선순위를 명시하기 위해 괄호를 사용. 괄호안의 계산식이 먼저 계산됨.

        부가적 효과
        코드의 가독성 향상
        연산자 우선순위 실수 방지
*/