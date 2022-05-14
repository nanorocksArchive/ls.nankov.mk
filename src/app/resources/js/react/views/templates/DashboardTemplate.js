import { Suspense, useState } from "react";
import ArticleItemOrganism from "../organisms/ArticleItemOrganism";
import PaginationOrganism from "../organisms/PaginationOrganism";
import SearchFilterOrganism from "../organisms/SearchFilterOrganism";
import { useFetchApi } from "./../../hooks/useFetchApi";

export default function DashboardTemplate(props) {
    const [url, setUrl] = useState("/articles");
    const [data] = useFetchApi(url);

    return (
        <>
            <SearchFilterOrganism />
            <div className="container">
                <div className="row">
                    <Suspense
                        fallback={<h4 className="text-light">Loading...</h4>}
                    >
                        {data !== null &&
                            data.data.map((item, index) => {
                                return (
                                    <ArticleItemOrganism
                                        item={item}
                                        key={index}
                                    />
                                );
                            })}
                    </Suspense>
                </div>
            </div>
            <PaginationOrganism setUrl={setUrl} data={data} />
        </>
    );
}
