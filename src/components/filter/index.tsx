import Category from './category.tsx';
import PriceRangeWrapper from './priceRangeWrapper.tsx';

const Filter = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
            }}
        >
            <Category />
            <PriceRangeWrapper />
        </div>
    );
};

export default Filter;
