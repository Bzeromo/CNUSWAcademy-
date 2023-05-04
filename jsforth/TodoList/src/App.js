import Header from "./Header.js"
import UserList from "./userList.js"
import TodoForm from "./TodoForm.js"
import TodoList from "./TodoList.js"
import { request } from "./api.js";
import { parse } from "./querystring.js";

export default function App({
    $target
}) {
    const $userListContainer = document.createElement('div')
    const $todoListContainer = document.createElement('div')

    $target.appendChild($userListContainer)
    $target.appendChild($todoListContainer)

    this.state = {
        userList: [],
        selectedUsername: null,
        todos: [],
        isLoading: false
    }

    // querylist 안에 있는 유저를 선택처리, 그게 아니면 클릭할 때 유저가 처리되는 형식
    const userList = new UserList({
        $target: $userListContainer,
        initialState: this.state.userList,
        onSelect: async (username) => {
            history.pushState(null, null, `/?selectedUsername=${username}`)
            this.setState({
                ...this.state,
                selectedUsername: username
            })
            await fetchTodo()
        }
    })

    const header = new Header({
        $target: $todoListContainer,
        initialState:{
            selectedUsername: this.state.selectedUsername,
            isLoading: this.state.isLoading
        }
    })
    

    new TodoForm({
        $target: $userListContainer,
        onSubmit: async (content) => {
            const isFirstTodoAdd = this.state.todos.length === 0
            const todo = {
                content,
                isCompleted: false
            }
            this.setState({
                ...this.state,
                todos: [
                    ...this.state.todos,
                    todo
                ]
            })

            await request(`/${this.state.selectedUsername}`, {
                method:'POST',
                body: JSON.stringify(todo)
            })
            await fetchTodo()

            if(isFirstTodoAdd) {
                await fetchUserList()
            }
        }
    })
    
    this.setState = nextState => {
        this.state = nextState

        header.setState({
            isLoading: this.state.isLoading,
            selectedUsername: this.state.selectedUsername
        })

        todoList.setState({
            isLoading: this.state.isLoading,
            todos: this.state.todos,
            selectedUsername: this.state.selectedUsername
        })

        userList.setState(this.state.userList)
        this.render()
    }

    this.render = () => {
        const { selectedUsername } = this.state
        $todoListContainer.style.display = selectedUsername ? 'block' : 'none'
    }

    const todoList = new TodoList({
        $target: $userListContainer,
        initialState: {
            isLoading: this.state.isLoading,
            todos: this.state.todos,
            selectedUsername: this.state.selectedUsername
        },
        onToggle: async (id) => {
            const todoIndex = this.state.todos.findIndex(todo => todo._id === id)

            const nextTodos = [...this.state.todos]
            nextTodos[todoIndex].isCompleted = !nextTodos[todoIndex].isCompleted
            this.setState({
                ...this.state,
                todos: nextTodos
            })
            await request(`/${this.state.selectedUsername}/${id}/toggle?delay=1000`, {
                method: 'PUT'
            })
            await fetchTodo()
        },
        onRemove: async (id) => {
            const todoIndex = this.state.todos.findIndex(todo => todo._id === id)

            const nextTodos = [...this.state.todos]
            nextTodos.splice(todoIndex, 1)
            this.setState({
                ...this.state,
                todos: nextTodos
            })
            await request(`/${this.state.selectedUsername}/${id}`, {
                method: 'DELETE'
            })
            await fetchTodo()
        }
        
    })
    const fetchUserList = async () => {
        const userList = await request('/users')
        this.setState({
            ...this.state,
            userList
        })
    }

    const fetchTodo = async () => {
        const {selectedUsername} = this.state

        if(selectedUsername) {
            this.setState({
                ...this.state,
                isLoading: true
            })
            const todos = await request(`/${selectedUsername}`)
            this.setState({
                ...this.state,
                todos,
                isLoading: false
            })
        }   
    }

    const init = async () => {
        await fetchUserList()

        // url에 특정 사용자를 나타내는 값이 있을 경우
        const { search } = location

        if (search.length > 0) {
            const {selectedUsername} = parse(search.substring(1))

            if (selectedUsername) {
                this.setState({
                    ...this.state,
                    selectedUsername
                })
                await fetchTodo()
            }
        }
    }
    
    this.render()
    init()
    
    window.addEventListener('popstate', () => {
        init()
    })
}