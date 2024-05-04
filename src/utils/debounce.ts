// 인자: debounce 시킬 함수, delay 시간(마지막 호출 이후 이 시간동안 입력이 없을때 호출)
export const debounce = (fn: Function, delay: number) => {

    let timer: ReturnType<typeof setTimeout>;

    return (...args: any) => {
        clearTimeout(timer);
        timer = setTimeout(() => {
            fn(...args);
        }, delay);
    };

}