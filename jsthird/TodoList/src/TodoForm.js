// ! TodoForm 생성 파라미터에 TodoList 넣고 직접 참조하면 안됨?
// TodoForm에 TodoList 컴포넌트의 의존성이 강하게 생기기 때문에 안됨.
// TodoForm 생성 파라미터에 이벤트 콜백을 넣고, text를 입력 받으면 해당 콜백을 통해 text를 넘겨주기
 export default function TodoForm({$target, onSubmit}) {
    const $form = document.createElement('form')
    $target.appendChild($form)

    let isInit = false;

    this.render = () => {
        $form.innerHTML = `
            <input type ="text" name = "todo" />
            <button>add</button>
        `

        if(!isInit) {
            $form.addEventListener('submit', e => {
                e.preventDefault();
            
                const $todo = $form.querySelector('input[name=todo]')
                const text = $todo.value
                
                if(text.length > 1) { // 한 글자 이상 들어왔을 때만 (없으면 빈 문자열만 들어갈 수 있음)
                    $todo.value = '' // 입력 후 input 비워주기

                    onSubmit(text) // App.js의 TodoForm 내의 onSubmit이 호출
                }
            })
            isInit = true
        }
    }
    
    this.render()
}

// module
// TodoForm, TodoList, Header 컴포넌트는 외부 의존성이 없기 때문에 export default로 사용