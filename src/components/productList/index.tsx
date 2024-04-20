import { useEffect, useState } from 'react';
import { useGetProducts } from '../../hooks/useGetProducts.ts';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import ProductCard from './productCard.tsx';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { useNavigate } from 'react-router-dom';

const PRODUCT_PER_PAGE = 5;
const FIRST_PAGE = 1;

const ProductList = () => {
    const navigate = useNavigate()
    const location = useLocation();
    const { products, loading } = useGetProducts(location.search);
    const [currentPage, setCurrentPage] = useState<number>(FIRST_PAGE);

    const handlePagination = (page: number) => {
        const parsed = qs.parse(window.location.search);
        console.log('parsed', parsed);

        const offset = (page - 1) * PRODUCT_PER_PAGE;
        const limit = PRODUCT_PER_PAGE;

        setCurrentPage(page);

        // TODO: handleCategoryClick 함수와 겹치는 부분 유틸로 빼기
        const param = new URLSearchParams(window.location.search);
        // param.set("page", page.toString())
        param.set('offset', offset.toString());
        param.set('limit', limit.toString());

        const pageQuery = window.location.pathname + '?' + param.toString()
        console.log(pageQuery)
        navigate(pageQuery)
    };


    if (loading) {
        return <p>상품을 로딩중입니다.</p>;
    }

    return (
        <div>
            <div
                style={{
                    height: 'calc(50vh - 30px)',
                    overflowY: 'scroll',
                }}
            >
                {products.length > 0 ? (
                    products.map((el) => (
                        <ProductCard key={el.id} product={el} />
                    ))
                ) : (
                    <p>
                        선택하신 필터에 맞는 상품이 없습니다. 필터를 다시
                        선택해주세요.
                    </p>
                )}
            </div>
            <Pagination
                total={25}
                onChange={handlePagination}
                current={currentPage}
            />
        </div>
    );
};

export default ProductList;
