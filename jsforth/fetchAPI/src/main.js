import productOptions from "./ProductOptions.js"

const dummy = [
    {
        optionName: "더미",
        optionPrice: 10000,
        stock: 10
    },
    {
        optionName: "더미2",
        optionPrice: 20000,
        stock: 10
    },
    {
        optionName: "더미3",
        optionPrice: 10000,
        stock: 0
    }
]

const $target = document.querySelector("#app")
new productOptions ({
    $target,
    initialState: dummy
})