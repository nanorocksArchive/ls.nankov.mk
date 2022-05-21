import { useState, useEffect } from "react";

export const useFetchApi = (endpoint = "/articles", method = "GET") => {
    const csrfToken = document
        .querySelector('meta[name="csrf-token"]')
        .getAttribute("content");
    const url = document
        .querySelector('meta[name="app-url"]')
        .getAttribute("content");

    const urlPath = endpoint.includes(url) ? endpoint : `${url}${endpoint}`;

    const [data, setData] = useState(null);

    useEffect(() => {
        fetch(`${urlPath}`, {
            method,
            headers: {
                "X-CSRF-TOKEN": csrfToken,
            },
        })
            .then((res) => res.json())
            .then((data) => setData(data))
            .catch((err) => alert(err.toString()));
    }, [endpoint]);

    return {data, setData};
};
