export function request (url, successCallback, failCallback) {
    const xhr = new XMLHttpRequest()
    xhr.addEventListener("load", (e) => {
        if(xhr.readyState ===4) {
            if(xhr.status === 200) {
                successCallback(JSON.parse(xhr.responseText))
            } else {
                failCallback(xhr.statusText)
            }
        }
    })
    xhr.addEventListener('error', (e) => failCallback(xhr.statusText))

    xhr.open('GET', url)
    xhr.send()
}