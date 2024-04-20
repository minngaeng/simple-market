import styled from 'styled-components';
import { useState } from 'react';

const Wrapper = styled.div``;

const PriceRange = styled.p`
    cursor: pointer;
    &:hover {
        color: #0173e9;
        background-color: #fafafa;
    }
`;

const PriceInput = styled.input`
    width: 10%;
`;
const ApplyButton = styled.button`
    padding: 0;
    margin: 0 0 0 5px;

    border-radius: 0px;
    background-color: rgb(1, 115, 233);
    color: white;
    &:hover {
        background-color: #609bef;
    }
`;

const PriceRangeWrapper = () => {

    const [priceMin, setPriceMin] = useState<string>('');
    const [priceMax, setPriceMax] = useState<string>('');

    const handlePriceRangeClick = (min: number, max: number) => {
        const params = new URLSearchParams(window.location.search);
        params.set('price_min', min.toString());
        params.set('price_max', max.toString());
        updateURLParams(params);
        setPriceMin('');
        setPriceMax('');
    };

    const handlePriceInputChange = () => {
        const params = new URLSearchParams(window.location.search);

        if (priceMin && priceMax) {
            if (priceMin) params.set('price_min', priceMin);
            if (priceMax) params.set('price_max', priceMax);
            updateURLParams(params);
        }

        setPriceMin('');
        setPriceMax('');
    };

    const updateURLParams = (params: URLSearchParams) => {
        const newRelativePathQuery =
            window.location.pathname + '?' + params.toString();
        window.history.pushState(null, '', newRelativePathQuery); // TODO: 1. navigate to new url
    };

    return (
        <Wrapper>
            <h3>Price</h3>
            {/* TODO: 2. price range 선택시 다른 필터는 유지하고, 페이지만 초기화 */}
            <PriceRange onClick={() => handlePriceRangeClick(10, 30)}>
                $10 ~ $30
            </PriceRange>
            <PriceRange onClick={() => handlePriceRangeClick(30, 50)}>
                $30 ~ $50
            </PriceRange>
            {/* TODO: 3. apply 눌렀을때도 2번과 마찬가지로 다른 필터는 유지하고, 페이지 초기화 */}
            <p>
                <PriceInput
                    value={priceMin}
                    onChange={(e) => setPriceMin(e.target.value)}
                />
                ~
                <PriceInput
                    value={priceMax}
                    onChange={(e) => setPriceMax(e.target.value)}
                />
                $
                <ApplyButton onClick={handlePriceInputChange}>
                    Apply
                </ApplyButton>
            </p>
        </Wrapper>
    )
}

export default PriceRangeWrapper;