import React, { useEffect, useState } from 'react';
import { useGetProducts } from '../hooks/useGetProducts';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import ProductCard from './productCard';
import Pagination from 'rc-pagination';
import "rc-pagination/assets/index.css"

const ProductList = () => {
    const location = useLocation();
    const [query, setQuery] = useState<string>(location.search);
    const { products, loading } = useGetProducts(query);

    useEffect(() => {
        const parsedQuery = qs.parse(location.search);
        setQuery(qs.stringify(parsedQuery));
    }, [location.search]);

    if (loading) {
        return <p>상품을 로딩중입니다.</p>
    }

    return (
        <div>
            {products.length > 0 ? products.map((el) => (
                <ProductCard key={el.id} product={el} />
            )) :
                <p>
                    선택하신 필터에 맞는 상품이 없습니다. 필터를 다시 선택해주세요.
                </p>
            }
            <Pagination total={25} />
        </div>
    );
};

export default ProductList;
