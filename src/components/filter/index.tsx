// import { useGetCategories } from '../../hooks/useGetCategories.ts';

const Filter = () => {
    // const { categories } = useGetCategories();
    return (
        <div
            style={{
                display: 'flex',
                flexDirection: 'column',
                gap: '20px',
                borderRadius: '10px',
                width: '200px',
                height: '100%',
                border: '1px solid white',
            }}
        >
            <h2>{`<Filter />`}</h2>
            {/*<ul>*/}
            {/*    {categories.map((category) => (*/}
            {/*        <li key={category.id}>*/}
            {/*            <p>*/}
            {/*                {category.name}*/}
            {/*            </p>*/}
            {/*        </li>*/}
            {/*    ))}*/}
            {/*</ul>*/}
        </div>
    );
};

export default Filter;
