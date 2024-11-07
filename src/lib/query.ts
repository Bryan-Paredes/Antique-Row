export function query(url: string) {
    return fetch(`${import.meta.env.STRAPI_HOST}/api/${url}`, {
        method: 'GET',
        headers: {
            'Content-Type': 'application/json',
        },
    }).then((res) => res.json());
}