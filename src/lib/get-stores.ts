import { query } from "./query";

export function getStores() {
    return query("stores?fields[0]=storeName&fields[1]=slug&fields[2]=storeDescription&fields[3]=storeMap&populate[storeImages][fields][0]=url")
        .then(res => {
            return res.data.map(store => {
                const { storeName, slug, storeDescription, storeMap, storeImages: rawImage } = store;
                const image = `${import.meta.env.STRAPI_MEDIA}/${rawImage[0].url}`;

                return { storeName, slug, storeDescription, storeMap, image };
            })
        })
}