export const getCategories = async () => {
    const response = await fetch('https://api.escuelajs.co/api/v1/categories');
    return await response.json();
};
