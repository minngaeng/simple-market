import { useEffect, useState } from 'react';
import { useGetProducts } from '../../hooks/useGetProducts.ts';
import qs from 'query-string';
import { useLocation } from 'react-router-dom';
import ProductCard from './productCard.tsx';
import Pagination from 'rc-pagination';
import 'rc-pagination/assets/index.css';

const ProductList = () => {
    const location = useLocation();
    const [query, setQuery] = useState<string>(location.search);
    const { products, loading } = useGetProducts(query);

    useEffect(() => {
        const parsedQuery = qs.parse(location.search);
        setQuery(qs.stringify(parsedQuery));
    }, [location.search]);

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
            <Pagination total={25} />
            {/* TODO: Pagination 작업 순서 */}
            {/*1. pagination UI 작업 -> UI 라이브러리를 설치 했으니 완료 ✅*/}
            {/*2. 한페이지마다 몇개를 보여줄지를 정하고*/}
            {/*3. offset, limit 계산작업*/}
            {/*4. 페이지 숫자 버튼 누르면 offset, limit query params에 반영*/}
            {/*5. query params가 바뀌면 상품이 잘 가져와지는지 확인*/}
        </div>
    );
};

export default ProductList;
