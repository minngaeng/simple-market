import Category from './category.tsx';
import PriceRangeWrapper from './priceRangeWrapper.tsx';
import SearchKeyword from './searchKeyword.tsx';

const Filter = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            <SearchKeyword />
            <Category />
            <PriceRangeWrapper />
        </div>
    );
};

export default Filter;
