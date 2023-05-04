// App에서 사용하는 컴포넌트, 함수를 import 키워드를 불러오도록 선언
import Header from './Header.js'
import TodoForm from './TodoForm.js'
import TodoList from './TodoList.js'
import { setItem } from './storage.js'

export default function App({$target, initialState}) {
    new Header({
        $target, 
        text: 'simple Todo List'
    })
    new TodoForm({
        $target,
        onSubmit: (text) => {
            const nextState = [...todoList.state, { text }]
            todoList.setState(nextState)

            setItem('todos', JSON.stringify(nextState)) // storage 부분 삭제
        }
    })

    const todoList = new TodoList ({
        $target,
        initialState
    })
}