import React, { useEffect } from 'react';
import { useGetProducts } from '../hooks/useGetProducts';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';

const ProductList = () => {
    const { products } = useGetProducts();
    const location = useLocation();
    // TODO: window.location.search에 변화가 있을 때마다 query를 업데이트하는 useEffect를 작성하세요.

    useEffect(() => {
        const parsedQuery = qs.parse(location.search);
        console.log(parsedQuery);
    }, [location.search]);

    return (
        <div>
            {products.map((el) => (
                <div key={el.id}>{el.title}</div>
            ))}
        </div>
    );
};

export default ProductList;
