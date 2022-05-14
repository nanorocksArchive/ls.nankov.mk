import { Suspense, useState } from "react";
import ArticleItemOrganism from "../organisms/ArticleItemOrganism";
import PaginationOrganism from "../organisms/PaginationOrganism";
import SearchFilterOrganism from "../organisms/SearchFilterOrganism";
import { useFetchApi } from "./../../hooks/useFetchApi";

export default function DashboardTemplate(props) {
    const [urlArticles, setUrlArticles] = useState("/articles");
    const [urlCategories, setUrlCategories] = useState("/categories");

    const { data: articles } = useFetchApi(urlArticles);
    const { data: categories } = useFetchApi(urlCategories);

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
        <>
            <SearchFilterOrganism
                categories={categories}
                setUrlCategories={setUrlCategories}
                urlArticles={urlArticles}
                setUrlArticles={setUrlArticles}
            />
            <div className="container">
                <div className="row">
                    {articles !== null && articles.data.length === 0 && <h3 className="px-3 text-light">No articles...</h3>}
                    {articles !== null &&
                        articles.data.map((item, index) => {
                            return (
                                <ArticleItemOrganism
                                    item={item}
                                    key={index}
                                    setUrlArticles={setUrlArticles}
                                    urlArticles={urlArticles}
                                />
                            );
                        })}
                </div>
            </div>
            <PaginationOrganism
                setUrlArticles={setUrlArticles}
                data={articles}
            />
        </>
    );
}
