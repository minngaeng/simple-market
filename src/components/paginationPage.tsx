import { useEffect, useState } from 'react';
import { useGetCategories } from '../hooks/useGetCategories.ts';
import { Pagination, Card, Row, Col } from 'antd';
const { Meta } = Card;

const PaginationPage = () => {
    const { categories } = useGetCategories();

    const [currentPage, setCurrentPage] = useState(1);
    const itemsPerPage = 8;

    useEffect(() => {
        // const offset = (currentPage - 1) * itemsPerPage;
        console.log(currentPage);
        updateURLParams(currentPage);
    }, [currentPage]);
    console.log('?', window.location.search);
    useEffect(() => {
        const param = new URLSearchParams(window.location.search);
        if (!param.has('categoryId')) {
            window.history.pushState(null, '', window.location.pathname);
        }

        const offset = param.get('offset');
        const limit = param.get('limit');

        if (offset && limit) {
            const page = Math.ceil(parseInt(offset) / parseInt(limit)) + 1;
            setCurrentPage(page);
        }
    }, []);

    const updateURLParams = (page: number) => {
        const offset = (page - 1) * itemsPerPage;
        const limit = itemsPerPage;
        const searchParams = new URLSearchParams(window.location.search);
        searchParams.set('offset', offset.toString());
        searchParams.set('limit', limit.toString());
        window.history.pushState(
            {},
            '',
            `${window.location.pathname}?${searchParams.toString()}`
        );
        // const newUrl = window.location.pathname
        // const newUrl = `${window.location.pathname}?${searchParams.toString()}`;
        // window.history.pushState({ path: newUrl }, '', newUrl);
    };

    const getPageData = () => {
        const startIndex = (currentPage - 1) * itemsPerPage;
        const endIndex = startIndex + itemsPerPage;
        return categories.slice(startIndex, endIndex);
    };

    const handlePageChange = (page: number) => {
        setCurrentPage(page);
    };

    const renderCategoryGrid = () => {
        return (
            <Row gutter={[16, 16]}>
                {getPageData().map((category) => (
                    <Col key={category.id} span={6}>
                        <Card
                            hoverable
                            style={{
                                width: 240,
                            }}
                            cover={<img alt="example" src={category.image} />}
                        >
                            <Meta
                                title={category.name}
                                description={category.updatedAt.slice(0, 10)}
                            />
                        </Card>
                    </Col>
                ))}
            </Row>
        );
    };

    return (
        <div>
            {renderCategoryGrid()}
            <Pagination
                defaultCurrent={currentPage}
                pageSize={itemsPerPage}
                total={50}
                onChange={handlePageChange}
            />
        </div>
    );
};

export default PaginationPage;
