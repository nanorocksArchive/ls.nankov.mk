import React from "react";
import { updateApiCall } from "../../services/CRUDService";

export default function ArticleItemOrganism({ item, setUrlArticles, urlArticles }) {
    const moveToHistory = (id) => {
        alert("Soft deleting article with id: " + id);
        updateApiCall(`/articles/${id}/update`).then((data) => {
            setUrlArticles(urlArticles + '?soft=' + id)
        });
    };

    return (
        <div className="col-md-4 my-2">
            <div className="card text-center h-100">
                <div className="card-body">
                    <h5 className="card-title">{item.title}</h5>
                    <p className="card-text text-truncate">
                        {item.description}
                    </p>
                    <a
                        href={item.url}
                        className="btn btn-outline-info"
                        target={"_blank"}
                    >
                        <svg
                            xmlns="http://www.w3.org/2000/svg"
                            width="20"
                            height="20"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                            className="feather feather-mouse-pointer"
                        >
                            <path d="M3 3l7.07 16.97 2.51-7.39 7.39-2.51L3 3z"></path>
                            <path d="M13 13l6 6"></path>
                        </svg>
                        Visit Article
                    </a>
                </div>
                <div className="card-footer d-flex justify-content-between">
                    <div onClick={() => moveToHistory(item.id)}>
                        <svg
                            className="text-danger feather feather-trash-2 cursor-pointer"
                            xmlns="http://www.w3.org/2000/svg"
                            width="17"
                            height="17"
                            viewBox="0 0 24 24"
                            fill="none"
                            stroke="currentColor"
                            strokeWidth="2"
                            strokeLinecap="round"
                            strokeLinejoin="round"
                        >
                            <polyline points="3 6 5 6 21 6"></polyline>
                            <path d="M19 6v14a2 2 0 0 1-2 2H7a2 2 0 0 1-2-2V6m3 0V4a2 2 0 0 1 2-2h4a2 2 0 0 1 2 2v2"></path>
                            <line x1="10" y1="11" x2="10" y2="17"></line>
                            <line x1="14" y1="11" x2="14" y2="17"></line>
                        </svg>
                    </div>
                    <div>
                        <div className="text-muted small mt-1">
                            {item.created_at}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
