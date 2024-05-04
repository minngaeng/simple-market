import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';
import { debounce } from '../../utils/debounce';

const SearchKeyword = () => {
    const [searchParams, setSearchParams] = useSearchParams();

    const setQuery = (value: string) => {
        const newSearchParams = new URLSearchParams(searchParams);
        newSearchParams.set('title', value);
        setSearchParams(newSearchParams);
    }

    const debouncedSetQuery = debounce(setQuery, 300);

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        // 네트워크 요청을 유발: url에 세팅되면 그 값으로 재요청이 일어남
        debouncedSetQuery(newValue);
    };
    // 디바운스를 왜 적용? -> 이 과정에서 조회가 일어나는 데, 이게 많아지면 과금이 늘어나는 원인(필요없는 네트워크 요청을 줄이기 위해)
    // 화면이 렌더링 되면 -> 깜빡임 유발, 느려질 수 있음

    // 쓰로틀링 vs 디바운스 : 이벤트가 많이 발생 -> 줄이기
    // 무거운 이벤트를 처리할 경우 사용자 입력이 느려질 수 있음

    return (
        <div>
            <label htmlFor="search">Search</label>
            <input type="text" id="search" onChange={handleInputChange} />
        </div>
    );
};

export default SearchKeyword;
