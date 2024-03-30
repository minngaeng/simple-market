export type Category = {
    id: number;
    name: string;
    image: string;
    createdAt: string;
    updatedAt: string;
};

export type Product = {
    id: number;
    title: string;
    price: number;
    description: string;
    category: Pick<Category, 'id' | 'name' | 'image'>;
    imgaes: string[];
}