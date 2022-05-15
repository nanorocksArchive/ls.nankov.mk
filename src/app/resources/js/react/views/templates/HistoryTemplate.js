import React, { Suspense, useState } from "react";
import { useFetchApi } from "../../hooks/useFetchApi";
import DataSetTableOrganism from "../organisms/DataSetTableOrganism";

export default function HistoryTemplate(props) {
    const [urlArticles, setUrlArticles] = useState("/articles/trashed");

    const { data: articles } = useFetchApi(urlArticles);

    if (articles === null) {
        return (
            <>
                <div className="container">
                    <div className="row">
                        <h3 className="text-light">Loading...</h3>
                    </div>
                </div>
            </>
        );
    }

    return (
        <div>
            {articles !== null && (
                <DataSetTableOrganism
                    articles={articles}
                    setUrlArticles={setUrlArticles}
                />
            )}
        </div>
    );
}
