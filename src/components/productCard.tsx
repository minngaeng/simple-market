import { Product } from '../types';

const ProductCard = ({ product }: {
    product: Product
}) => {
    return (
        <div style={{ display: "flex", flexDirection: 'column' }}>
            <img src={product.images[0]} style={{
                width: '100px',
                height: '100px',
            }} />
            <p>{product.title}</p>
            <p>{product.price}</p>
        </div>
    );
}

export default ProductCard;