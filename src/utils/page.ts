import { NavigateFunction } from 'react-router-dom';

export const initPage = (param: URLSearchParams) => {
    param.set('offset', '0');
    return param;
};

export const updatedNavigate = (
    params: URLSearchParams,
    navigate: NavigateFunction
) => {
    const newPath = `${window.location.pathname}?${params.toString()}`;
    navigate(newPath);
};
