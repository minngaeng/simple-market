import { useGetCategories } from '../hooks/useGetCategories.ts';

const Marketplace = () => {
    const { categories } = useGetCategories();

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
