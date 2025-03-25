export function debounce(callback, wait) {
    let timer;
    return function(...args) {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() => {
            clearTimeout(timer);
            callback(...args);
        }, wait);
    }
}