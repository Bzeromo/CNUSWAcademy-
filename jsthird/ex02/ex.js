/*
    비동기 처리
        - 특정 코드의 연산이 끝날 때까지 코드의 실행을 멈추지 않고 다음 코드를 먼저 실행하는 자바스크립트의 특성
*/

// 비동기 실행 ex) addEventListener()
// 해당 함수의 두 번째 인자로 넘겨진 함수는 바로 실행되지 않고 이벤트 리스너가 정의한 이벤트가 발생했을 때 실행
function onButtonClick () {
    alert('눌렀다')
}
document.querySelector('.save-button').addEventListener('click', onButtonClick)

// 비동기 실행 ex2) setTimeout(), setInterval()
// 첫 번째 인자로 넘겨진 함수는 바로 실행되지 않고 setTimeout 혹은 setInterval의 시간만큼 지난 후에 실행
function work() {
    console.log('work!')
}

setTimeout(work, 1000) // 한 번 실행
setInterval(work, 5000) // 시간 주기로 반복 실행

console.log('work process')

// 비동기 실행 ex3) XMLHttpRequest(XHR)
// 데이터를 비동기로 요청하고, 요청 후의 동작을 비동기로 처리
// ! 비동기의 콜백지옥보다 차라리 더 깔끔한 코드의 동기로 처리하면 안되나요?
// sync 방식으로 사용하게 되면 요청 후 dmd답이 오기 전까지 브라우저가 굳어버려서 안된다!
// ex) API 조회에 10초가 걸린다면 10초간 브라우저가 먹통이 된다.