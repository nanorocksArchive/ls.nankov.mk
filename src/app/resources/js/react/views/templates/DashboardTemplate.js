import React from 'react'
import ArticleItemOrganism from '../organisms/ArticleItemOrganism'
import PaginationOrganism from '../organisms/PaginationOrganism'
import SearchFilterOrganism from '../organisms/SearchFilterOrganism'

export default function DashboardTemplate() {
  return (
      <>
          <SearchFilterOrganism />
          <div className="container">
              <div className="row">
                  {[1,2,3,4,5].map((item, index) => {
                      return <ArticleItemOrganism item={item} key={index}/>;
                  })}
              </div>
          </div>
          <PaginationOrganism />
      </>
  );
}
