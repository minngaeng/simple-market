export const getCategories = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    return await response.json();
};

export const getProducts = async (query?: string) => {
    const response = await fetch(
        `https://api.escuelajs.co/api/v1/products?${query}`
    );
    return await response.json();
};
