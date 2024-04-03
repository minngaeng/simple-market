import React, { useEffect } from 'react';
import { useGetProducts } from '../hooks/useGetProducts';

const ProductList = () => {
    
    const [query, setQuery] = React.useState('');
    const { products } = useGetProducts(query);

    // TODO: window.location.search에 변화가 있을 때마다 query를 업데이트하는 useEffect를 작성하세요.
    useEffect(() => {
    
    }, []);

    return <div>productList</div>;
};

export default ProductList;
