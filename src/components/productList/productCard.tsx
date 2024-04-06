import { Product } from '../../types';

const ProductCard = ({ product }: { product: Product }) => {
    return (
        <div style={{ display: 'flex' }}>
            <img
                alt={product.title}
                src={product.images[0]}
                style={{
                    width: '100px',
                    height: '100px',
                }}
                onError={(e) => {
                    if (!e.currentTarget.src.includes('default.jpeg')) {
                        e.currentTarget.src = '/default.jpeg';
                    }
                }}
            />
            <div
                style={{
                    display: 'flex',
                    flexDirection: 'column',
                    alignItems: 'flex-start',
                    marginLeft: '10px',
                }}
            >
                <p
                    style={{
                        margin: '0',
                        padding: '0',
                        textAlign: 'left',
                        maxWidth: '300px',
                        whiteSpace: 'nowrap',
                        overflow: 'hidden',
                        textOverflow: 'ellipsis',
                    }}
                >
                    {product.title}
                </p>
                <p
                    style={{
                        margin: '0',
                        padding: '0',
                    }}
                >
                    ${product.price}
                </p>
            </div>
        </div>
    );
};

export default ProductCard;
