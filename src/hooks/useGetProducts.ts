import { useEffect, useState } from 'react';
import { getProducts } from '../api/categories';
import { Product } from '../types';

export const useGetProducts = (query?: string) => {
    const [products, setProducts] = useState<Product[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        setLoading(true);
        getProducts(query)
            .then((data) => {
                setProducts(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error getting products', error);
                setError(true);
                setLoading(false);
            });
    }, [query]);

    return { products, loading, error };
};
