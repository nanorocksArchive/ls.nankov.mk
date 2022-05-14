export const updateApiCall = (endpoint, method = "PUT") => {
    const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
    const url = document
        .querySelector('meta[name="app-url"]')
        .getAttribute("content");

    const urlPath = endpoint.includes(url) ? endpoint : `${url}${endpoint}`;

    return fetch(`${urlPath}`, {
        method,
        headers: {
            "X-CSRF-TOKEN": csrfToken,
        },
    }).then((res) => res.json());
};
