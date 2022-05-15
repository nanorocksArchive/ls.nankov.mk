import React from "react";
import { Table, Thead, Tbody, Tr, Th, Td } from "react-super-responsive-table";
import "react-super-responsive-table/dist/SuperResponsiveTableStyle.css";
import { capitalizeFirstLetter } from "../../util";
import Moment from "react-moment";
import { updateApiCall } from "../../services/CRUDService";

export default function DataSetTableOrganism({ articles, setUrlArticles }) {
    const rollbackArticle = (article) => {
        updateApiCall(`/articles/${article.id}/rollback`).then((data) => {
            alert("Rollback operation for old article ...")
            setUrlArticles(`/articles/trashed?rollback=${article.id}`);
        });
    };

    return (
        <>
            <h3 className="pt-2 text-light">Rollback Articles</h3>
            <Table className="table">
                <Thead>
                    <Tr className="text-center">
                        <Th>Title</Th>
                        <Th>Category</Th>
                        <Th>Deleted</Th>
                        <Th>Rollback</Th>
                    </Tr>
                </Thead>
                <Tbody>
                    {articles.map((item, index) => {
                        return (
                            <Tr key={index} className="text-center">
                                <Td>
                                    <a
                                        className="text-info"
                                        href={item.url}
                                        target={"_blank"}
                                    >
                                        {item.title}
                                    </a>
                                </Td>
                                <Td>
                                    {item.categories.map((item) => (
                                        <span className="d-block" key={item.id}>
                                            {capitalizeFirstLetter(item.name)}
                                        </span>
                                    ))}
                                </Td>
                                <Td>
                                    <Moment fromNow>{item.deleted_at}</Moment>
                                </Td>
                                <Td>
                                    <button
                                        className="btn btn-sm btn-info"
                                        onClick={() => rollbackArticle(item)}
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
                                            className="feather feather-refresh-ccw"
                                        >
                                            <polyline points="1 4 1 10 7 10"></polyline>
                                            <polyline points="23 20 23 14 17 14"></polyline>
                                            <path d="M20.49 9A9 9 0 0 0 5.64 5.64L1 10m22 4l-4.64 4.36A9 9 0 0 1 3.51 15"></path>
                                        </svg>
                                    </button>
                                </Td>
                            </Tr>
                        );
                    })}
                </Tbody>
            </Table>
            {articles !== null && articles.length === 0 && (
                <h5 className="pt-2 text-light text-center">No articles...</h5>
            )}
        </>
    );
}
