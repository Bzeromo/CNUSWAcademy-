const storage = window.localStorage

export const setItem = (key, value) => {
    try {
        storage.setItem(key,value)
    } catch(e) {
        console.log(e)
    }
}

export const getItem = (key, defaultValue) => {
    try {
        const storedValue = storage.getItem(key)

        if(storedValue) {
            return JSON.parse(storedValue)
        }
        return defaultValue
    } catch(e) {
        console.log(e)
        return defaultValue
    }
}

// 모듈식으로 필요할 때만 꺼내는 방식으로 수정
