export const initPage = (param: URLSearchParams) => {
    param.set('offset', '0');
    return param;
}