import App from './App.js'
import { getItem } from './storage.js'
// const initialState = JSON.parse(localStorage.getItem('todos' || '[]'))
const initialState = getItem('todos', [])

// const data2 = [
//     {
//         text: '자바스크립트 부수기'
//     },
//     {
//         text: '자바스크립트 때려치기'
//     }
// ]
// const data3 = [
//     {
//         text: '자바스크립트 안하기'
//     },
//     {
//         text: '자바스크립트 접기'
//     }
// ]

const $app = document.querySelector('.app')

// new TodoForm({
//     $target: $app,
//     onSubmit: (text) => {
//         const nextState = [...todoList.state, {
//             text
//         }]
//         todoList.setState(nextState)
//     }
// })

// // TodoList는 컴포넌트화 되어 있기 때문에 재사용이 쉽다.
// const todoList = new TodoList({
//     $target: $app,
//     initialState: data
// })

// setTimeout(()=> {
//     todoList.setState([
//         {text: 'Happy JS!!'}
//     ])
// }, 5000)

// new TodoList({
//     $target: $app,
//     initialState: data2
// })
// new TodoList({
//     $target: $app,
//     initialState: data3
// })

new App({
    $target: $app,
    initialState
})