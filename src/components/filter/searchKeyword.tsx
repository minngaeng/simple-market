import { ChangeEvent } from 'react';
import { useSearchParams } from 'react-router-dom';

const SearchKeyword = () => {
    // TODO: 5.사용자가 값을 입력하면, 입력한 값을 query params에 반영
    // ex) title=검색어
    const [searchParams, setSearchParams] = useSearchParams();

    const handleInputChange = (event: ChangeEvent<HTMLInputElement>) => {
        const newValue = event.target.value;
        const newSearchParams = new URLSearchParams(searchParams);

        newSearchParams.set('title', newValue);
        setSearchParams(newSearchParams);
    };

    return (
        <div>
            <label htmlFor="search">Search</label>
            <input type="text" id="search" onChange={handleInputChange} />
        </div>
    );
};

export default SearchKeyword;
