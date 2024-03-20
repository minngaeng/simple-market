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
                </CategoryWrapper>
                <MoreButton>더 보기</MoreButton>
            </div>
        </div>
    );
};

export default Marketplace;
