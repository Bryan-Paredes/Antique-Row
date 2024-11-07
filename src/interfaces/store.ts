export default interface Store {
    id: number;
    attributes: {
        storeName: string;
        storeDescription: string;
        storeMap: string;
        slug: string;
        storeImage: string;
        categoryName: string;
    };
}