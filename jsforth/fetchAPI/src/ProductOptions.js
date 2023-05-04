export default function productOptions({$target, initialState, onSelect}) {
    const $select = document.createElement('select')

    $target.appendChild($select)

    /*
     *  상품 옵션 이름 렌더링 시 상품명 + 옵션명 + 재고: n개 이런 형식으로 보여주어야 함
     *  재고가 0인 상품의 경우 옵션을 선택하지 못하게 함
     * [
     *  {
     *      optionName: '옵션 상품'
     *  }
     * ]
    */

    this.state = initialState

    this.setState = (nextState) => {
        this.state = nextState
        this.render
    }

const createOptionFullName = ({optionName, optionPrice, stock}) => {
    return `${optionName} ${optionPrice > 0 ? `옵션가 ${optionPrice}` : ''} | ${stock > 0 ? `재고 ${stock}` : '재고 없음'} }` 
}



    this.render = () => {
        if(this.state && Array.isArray(this.state)) {
            $select.innerHTML = `
                ${this.state.map(option => `<option ${option.stock===0 ? 'disabled' : ''} value="${option.id}">${this.createOptionFullName(option)}</option>`).join('')}
            `
        }
    }
    this.render()
}