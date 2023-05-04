export default function App () {
    this.render = () => {
        alert('hello!')
    }
    this.render()
}

export const printToday = () => {
    console.log(new Date().toLocaleString()) // 지역에 맞는 날짜 표기법으로 바꿔서 출력
}