import styled from 'styled-components';

const PriceRangeWrapper = styled.div``;

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

import { useEffect, useState } from 'react';
import Category from './category.tsx';

const Marketplace = () => {
    useEffect(() => {
        const param = new URLSearchParams(window.location.search);
        if (!param.has('categoryId')) {
            window.history.pushState(null, '', window.location.pathname);
        }
    }, []);

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
        window.history.pushState(null, '', newRelativePathQuery);
    };

    return (
        <div>
            <h1>Marketplace</h1>
            <div>
                <h2>Filter</h2>
                <Category />
                <PriceRangeWrapper>
                    <h3>가격</h3>
                    <PriceRange onClick={() => handlePriceRangeClick(10, 30)}>
                        10달러 ~ 30달러
                    </PriceRange>
                    <PriceRange onClick={() => handlePriceRangeClick(30, 50)}>
                        30달러 ~ 50달러
                    </PriceRange>
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
                        원
                        <ApplyButton onClick={handlePriceInputChange}>
                            적용
                        </ApplyButton>
                    </p>
                </PriceRangeWrapper>
            </div>
        </div>
    );
};

export default Marketplace;
