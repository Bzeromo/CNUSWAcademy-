/*
    명령형 프로그래밍과 선언형 프로그래밍
*/

// 명령형 -> 어떻게 처리하는지에 대한 묘사
// function double(arr) {
//     let results = []
//     for(let i =0; i <arr.length; i++) {
//         results.push(arr[i]*2)
//     }
//     return results
// }

// 선언형 -> 무엇을 원하는지에 대한 묘사
// function double(arr) {
//     return arr.map(number => number*2)
// }

// 명령형
// function double(arr) {
//     let results = []
//     for(let i =0; i <arr.length; i++) {
//         if(typeof arr[i] ==="number")
//             results.push(arr[i]*2)
//     }
//     return results
// }

// 선언형
// function double(arr) {
//     return arr.filter(param=> typeof param === 'number')
//                 .map(number => number*2)
// }

// // document.querySelector('body').innerHTML = double([3,4,5]);
// console.log(double([1,2,3]));

const $button1 = document.createElement('button')
$button1.textContent = 'button1'

const $button2 = document.createElement('button')
$button2.textContent = 'button2'

const $button3 = document.createElement('button')
$button3.textContent = 'button3'

const toggleButton = ($button) => {
    if($button.style.textDecoration ===''){
        $button.style.textDecoration = 'line-through'
    } else {
        $button.style.textDecoration=''
    }
}


document.querySelector('#app').appendChild($button1)
document.querySelector('#app').appendChild($button2)
document.querySelector('#app').appendChild($button3)

document.querySelectorAll('#app button').forEach($button=>$button.addEventListener('click', (e) => {
    toggleButton(e.target)
}))

function ToggleButton({
    $target,
    text
}) {
    const $button = document.createElement('buuton')

    $target.appendChild($button)

    this.render = () => {
        $button.textContent = text
    }

    this.render()
}

const $app = document.querySelector('#app')

new ToggleButton({
    $target: $app,
    text: 'Button1'
})


/*
    쿠키(Cookie)
        - 브라우저에 저장되는 작은 문자열로, RFC 6265 명세에서 정의한 HTTP 프로토콜의 일부
        - 다른 저장 방법에 비해 가장 오래된 방식
        - 주의사항
            - HTTP 요청시 헤더에 쿠키가 같이 나가기 때문에 쿠키 사이즈가 커지면 HTTP 요청 크기도 커짐
            - 사이즈에 제한이 있음
            - 여러가지 보안 취약점을 조심해야 함

    로컬 저장소(Local Storage)
        - key, value 기반으로 Local에 데이터를 저장할 수 있다.
        - 도메인 기반으로 Storage가 생성이 된다.
            - 도메인만 같다면 여러탭 내에서 같은 Storage가 공유된다.
        - 직접 삭제하거나 Storage를 날리지 않는 한 삭제되지 않는다.
        - String만 넣을 수 있다.
            - JSON.stingify로 넣고 JSON.parse로 꺼낸 값을 파싱해서 쓰는 것이 좋다.
*/

// 쿠키 추가 (이전 쿠키를 덮어쓰지 않고 새로 추가됨)
document.cookie = 'language=javascript'

// 쿠키 읽어 오기 (각 쿠키는 ;로 구분되어 있어 불러온 후 split 등으로 쪼개서 써야 함)
const cookies = document.cookie
cookies.split(';')

// 쿠키 유효기간 넣기 (넣지 않으면 브라우저를 닫는 순간 사라짐)
// 유효기간이 지나면 삭제됨

// 첫 번째 방법
// expires의 경우 GMT String을 넣어야 함.
// GMT 기준이기 때문에 이 쿠키는 한국 시간 기준으로 2023년 1월 27일 16시 17분 36초까지 유효
const date = new Date()
date.setDate(date.getDate() + 1) // 유효기간을 하루로 설정하기
document.cookie = `kdt_user_name=gue; expires=${date.toGMTString()}` // 현재 타임존 기준으로 GMT 시간 확인 후 쿠키 저장

// 유효기간 넣는 또 다른 방법
// max-age를 넣으면 생성시점 기준으로 유효기간 설정이 가능
// 단위는 1초, 3600의 경우 1시간
document.cookie = 'user=gue; max-age=3600'

// 로컬 저장소에 값을 저장하는 3가지 방법
// window는 생략 가능
window.localStorage.name = 'gue'
window.localStorage['name'] = 'gue'
window.localStorage.setItem('name', 'gue')

// setItem을 이용해 사용하는 것이 권장됨
// property를 수정하는 식으로 하면 length, toString 같은 내장 함수들을 덮어 씌울 수 있기 때문

// 불러오기
const storedName = localStorage.getItem('name')

// 삭제하기
localStorage.removeItem('name')

// 전체 삭제하기
localStorage.clear()

const user = {
    name: 'gue',
    age: '26',
    favor: ['book', 'friends']
}

// 저장
localStorage.setItem('user', JSON.stringify(user))

// 불러오기
const storedName2 = JSON.parse(localStorage.getItem('name'))

/*
    세션 저장소(Session Storage)
        - 전체적으로 로컬 저장소와 같다.
        - 브라우저를 닫으면 저장된 내용이 초기화 된다.

    로컬 저장소 주의 사항
        - 외부 툴 등을 이용해 json string을 올바르지 않은 형태로 바꿔버리면 웹 페이지가 작동을 하지 않게 된다
        - 그래서 storage 컴포넌트를 따로 만들고 try catch로 예외 처리함 (저장소가 용량제한이 있어서 캐싱을 잘못 설계하면 캐시가 쌓여 setItem 사용시 오류가 발생할 수 있음)
*/
