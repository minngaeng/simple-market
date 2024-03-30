import PriceRangeWrapper from './priceRangeWrapper';
import Category from './category';

const Marketplace = () => {

    return (
        <div>
            <h1>Marketplace</h1>
            <div>
                <h2>Filter</h2>
                <Category />
                <PriceRangeWrapper />
            </div>
        </div>
    );
};

export default Marketplace;
