import styled from 'styled-components';
import { Category as CategoryType } from '../../types';
import { useMemo } from 'react';
import { useNavigate } from 'react-router-dom';
import { initPage } from '../../utils/page';

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

import { useGetCategories } from '../../hooks/useGetCategories.ts';
import { useEffect, useState } from 'react';

const Category = () => {
    const navigate = useNavigate();
    const [selectedCategoryId, setSelectedCategoryId] = useState<number>(0);

    const { categories } = useGetCategories();

    const [visibleCategories, setVisibleCategories] = useState<CategoryType[]>(
        []
    );

    useEffect(() => {
        setVisibleCategories(categories.slice(0, 5));
    }, [categories]);

    const isAllVisible = useMemo(() => {
        return visibleCategories.length > 5;
    }, [visibleCategories]);

    const handleShowMoreClick = (showMore: boolean) => {
        if (showMore) {
            setVisibleCategories(categories);
        } else {
            setVisibleCategories(categories.slice(0, 5));
        }
    };

    const isSelected = (categoryId: number) => {
        return categoryId === selectedCategoryId;
    };

    const handleCategoryClick = (categoryId: number) => {
        setSelectedCategoryId(categoryId);
        const param = new URLSearchParams(window.location.search);
        param.set('categoryId', categoryId.toString());
        const newRelativePathQuery =
            window.location.pathname + '?' + initPage(param).toString();

        navigate(newRelativePathQuery);
    };

    return (
        <div>
            <p>Category</p>
            <CategoryWrapper>
                {visibleCategories.map((category) => (
                    <CategoryContents
                        key={category.id}
                        onClick={() => handleCategoryClick(category.id)}
                        style={{
                            backgroundColor: isSelected(category.id)
                                ? 'white'
                                : '',
                            color: isSelected(category.id)
                                ? '#242424'
                                : 'inherit',
                        }}
                    >
                        {category.name}
                    </CategoryContents>
                ))}
                <MoreButton onClick={() => handleShowMoreClick(!isAllVisible)}>
                    {isAllVisible ? '닫기' : '더 보기'}
                </MoreButton>
            </CategoryWrapper>
        </div>
    );
};

export default Category;
