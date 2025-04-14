export function debounce<T extends unknown[]>(
    callback: (...args: T) => void,
    wait: number
): (...args: T) => void {

    let timer: ReturnType<typeof setTimeout>;

    return function(...args : T) : void {
        if (timer) {
            clearTimeout(timer);
        }

        timer = setTimeout(() : void => {
            clearTimeout(timer);
            callback(...args);
        }, wait);
    }
}