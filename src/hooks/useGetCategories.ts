import { useEffect, useState } from 'react';
import { getCategories } from '../api/categories';
import { Category } from '../types';

export const useGetCategories = () => {
    const [categories, setCategories] = useState<Category[]>([]);
    const [loading, setLoading] = useState<boolean>(true);
    const [error, setError] = useState<boolean>(false);

    useEffect(() => {
        getCategories()
            .then((data) => {
                setCategories(data);
                setLoading(false);
            })
            .catch((error) => {
                console.error('Error getting categories', error);
                setError(true);
                setLoading(false);
            });
    }, []);

    return { categories, loading, error };
};
