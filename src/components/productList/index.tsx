import { useMemo } from 'react';
import { useGetProducts } from '../../hooks/useGetProducts.ts';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import ProductCard from './productCard.tsx';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';
import { useNavigate } from 'react-router-dom';
import { updatedNavigate } from '../../utils/page.ts';

const PRODUCT_PER_PAGE = 5;
const FIRST_PAGE = 1;

const ProductList = () => {
    const navigate = useNavigate();
    const location = useLocation();
    const { products, loading } = useGetProducts(location.search);

    const currentPage = useMemo(() => {
        const params = qs.parse(location.search);
        if (params.offset === undefined) {
            return FIRST_PAGE;
        } else {
            return Number(params.offset) / PRODUCT_PER_PAGE + 1;
        }
    }, [window.location.search]);

    const handlePagination = (page: number) => {
        const parsed = qs.parse(window.location.search);
        console.log('parsed', parsed);

        const offset = (page - 1) * PRODUCT_PER_PAGE;
        const limit = PRODUCT_PER_PAGE;

        // TODO: 4. priceRange 페이지의(updateURLParams), handleCategoryClick 함수와 겹치는 부분 유틸로 빼기
        const param = new URLSearchParams(window.location.search);
        param.set('offset', offset.toString());
        param.set('limit', limit.toString());

        // const pageQuery = window.location.pathname + '?' + param.toString();
        // navigate(pageQuery);
        updatedNavigate(param, navigate);
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
