import { useGetCategories } from '../hooks/useGetCategories.ts';
import { useEffect } from 'react';

const Marketplace = () => {
    const { categories } = useGetCategories();

    useEffect(() => {
        console.log('categories', categories);
    }, [categories]);

    return (
        <div>
            <h1>Marketplace</h1>
            <div>
                <h2>Filter</h2>
                <ul>
                    {categories.map((category) => (
                        <li key={category.id}>{category.name}</li>
                    ))}
                </ul>
            </div>
        </div>
    );
};

export default Marketplace;
