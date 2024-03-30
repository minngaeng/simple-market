import PriceRangeWrapper from './priceRangeWrapper';
import Category from './category';
import ProductList from './productList';

const Marketplace = () => {

    return (
        <div
            className='marketplace-container'
            style={{
                width: '100%',
            }}>
            <h1>Marketplace</h1>
            <div style={{
                display: 'flex',
                justifyContent: 'space-between'
            }}>
                <div style={{
                    border: '1px solid white',
                    borderRadius: '5px',
                    width: '200px',
                }}>
                    <Category />
                    <PriceRangeWrapper />
                </div>
                <div style={{
                    border: '1px solid white',
                    borderRadius: '5px',
                    width: 'calc(100% - 200px)',
                }}>

                    <ProductList />
                </div>
            </div>
        </div>
    );
};

export default Marketplace;
