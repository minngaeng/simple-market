import Filter from '../components/filter';
import Header from '../components/header';
import Footer from '../components/footer';
import ProductList from '../components/productList';

const Marketplace = () => {
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '30px',
            }}
        >
            <Header />
            <div
                style={{
                    display: 'flex',
                    justifyContent: 'center',
                    alignItems: 'center',
                    gap: '20px',
                }}
            >
                <div
                    style={{
                        height: '50vh',
                        overflowY: 'scroll',
                        border: '1px solid white',
                        borderRadius: '5px',
                        width: '200px',
                    }}
                >
                    <Filter />
                </div>

                <div
                    style={{
                        height: '50vh',
                        overflowY: 'hidden',
                        border: '1px solid white',
                        borderRadius: '5px',
                        width: 'calc(100% - 200px)',
                    }}
                >
                    <ProductList />
                </div>
            </div>
            <Footer />
        </div>
    );
};

export default Marketplace;
