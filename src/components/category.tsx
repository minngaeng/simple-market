import styled from 'styled-components';
import { Category as CategoryType } from '../types';

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
import { useEffect, useState } from 'react';

const Category = () => {
    const { categories } = useGetCategories();

    const [visibleCategories, setVisibleCategories] = useState<CategoryType[]>([]);

    useEffect(() => {
        setVisibleCategories(categories.slice(0, 5));
    }, [categories]);

    const [isAllCategoriesVisible, setIsAllCategoriesVisible] = useState(false);

    const handleShowMoreClick = () => {
        setVisibleCategories(categories);
        setIsAllCategoriesVisible(true);
    };

    const handleCategoryClick = (categoryId: number) => {
        const param = new URLSearchParams(window.location.search);
        param.set('categoryId', categoryId.toString());
        const newRelativePathQuery =
            window.location.pathname + '?' + param.toString();

        window.history.pushState(null, '', newRelativePathQuery);
    };

    return (
        <div>
            <h1>Category</h1>
            <CategoryWrapper>
                {visibleCategories.map((category) => (
                    <CategoryContents
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                    >
                        {category.name}
                    </CategoryContents>
                ))}
                {!isAllCategoriesVisible && categories.length > 5 && (
                    <MoreButton onClick={handleShowMoreClick}>
                        더 보기
                    </MoreButton>
                )}
            </CategoryWrapper>
        </div>
    );
};

export default Category;