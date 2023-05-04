// params.$target - 해당 컴포넌트가 추가될 DOM 엘리먼트
// params.initialState - 해당 컴포넌트의 초기 상태
// 앞에 $가 붙은 변수는 DOM 객체를 담고 있는 변수라는 의미, 접미사에 Element를 붙여 표현할 수도 있음
// function TodoList(params) {
//     const $target = params.$target;
//     const $todoList = document.createElement('div'); // 컴포넌트의 DOM
//     $target.appendChild($todoList);

//     this.state = params.initialState;

//     this.render = () => {
//         /*
//         let html = ''
//         for(let i = 0; i <this.state.length; i++) {
//             html =+ `<li>${this.state[i].text}</li>`
//         }
//         html = `<ul>${html}</ul>`;
//         $todoList.innerHTML = html;
//         */
//         $todoList.innerHTML = `
//             <ul>
//                 ${this.state.map(todo =>`<li>${todo.text}</li>`).join('')}
//             </ul>
//         `
//         // map을 돈 이후에는 아래처럼 만들어진다
//         /*
//             this.state.map(todo => `<li>${todo.text}</li>`)
//             ->    [{text: '자바스크립트 공부하기'}, {text: '....'}]
//             ->    ['<li>자바스크립트 공부하기</li>', '<li>....</li>']

//             join('')을 하게되면?
//             ->    <li>자바스크립트 공부하기</li><li>....</li>
//         */
//     }

//     this.render();
// }

// ES6의 Objcet Distructuring으로 코드 더 간결하게 바꾸기
export default function TodoList({$target, initialState}) {
    const $todoList = document.createElement('div'); // 컴포넌트의 DOM
    $target.appendChild($todoList);

    this.state = initialState;

    // 현재의 상태를 변경하고 변경한 상태를 다시 랜더링
    this.setState = nextState => {
        this.state = nextState;
        this.render();
    }

    this.render = () => {
        $todoList.innerHTML = `
            <ul>
                ${this.state.map(({text}) =>`<li>${text}</li>`).join('')}
            </ul>
        `
    }

    this.render();
}