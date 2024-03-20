import styled from 'styled-components';

const CategoryWrapper = styled.div`
    list-style: none;
`;

const CategoryContents = styled.p`
    margin: 10px 0;
    height: 30px;
    border-radius: 15px;
    border: 1px solid lightgray;
    cursor: pointer;
    &:hover {
        background-color: #ededed;
    }
`;

const MoreButton = styled.button`
    width: 100%;
`;

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

import { useGetCategories } from '../hooks/useGetCategories.ts';

const Marketplace = () => {
    const { categories } = useGetCategories();
    console.log(categories);
    return (
        <div>
            <h1>Marketplace</h1>
            <div>
                <h2>Filter</h2>
                <CategoryWrapper>
                    {categories.map((category) => (
                        <CategoryContents key={category.id}>
                            {category.name}
                        </CategoryContents>
                    ))}
                    <MoreButton>더 보기</MoreButton>
                </CategoryWrapper>
                <PriceRangeWrapper>
                    <h3>가격</h3>
                    <PriceRange>가격 전체</PriceRange>
                    <PriceRange>10달러 ~ 30달러</PriceRange>
                    <PriceRange>30달러 ~ 50달러</PriceRange>
                    <p>
                        <PriceInput /> ~ <PriceInput /> 원{' '}
                        <ApplyButton>적용</ApplyButton>
                    </p>
                </PriceRangeWrapper>
            </div>
        </div>
    );
};

export default Marketplace;
