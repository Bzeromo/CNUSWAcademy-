export const parse = (querystring) => 
    // '?name=gue&position=bassist'
    // &로 쪼갠다.
    // key=value의 조합을 object의 형태로 만든다.
    // 만들어진 것을 리턴
    querystring.split('&').reduce((acc, keyAndValue) => {
        const [key, value] = keyAndValue.split('=')

        if(key && value) {
            acc[key] = value
            console.log(acc, key, value)
        }
        return acc
    }, {})

// querystring parsing 함수