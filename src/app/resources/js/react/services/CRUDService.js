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

export const storeApiCall = (endpoint, method = "POST", body) => {
    const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
    const url = document
        .querySelector('meta[name="app-url"]')
        .getAttribute("content");

    const urlPath = endpoint.includes(url) ? endpoint : `${url}${endpoint}`;

    console.log("body", body);
    return fetch(`${urlPath}`, {
        body: JSON.stringify(body),
        method: "POST",
        headers: {
            "X-CSRF-TOKEN": csrfToken,
            "Content-type": "application/json"
        },
    }).then((res) => res.json());
};
