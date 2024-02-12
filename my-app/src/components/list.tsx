import React from "react";
import type { Article } from "../type/type";
import Item from "./item";

type ListProps = {
  articles: { slug: string; data: Article }[];
};

const List: React.FC<ListProps> = ({ articles }) => {
  return (
    <div className="pb-8 md:pb-16">
      <h2 className="font-inter mb-10 text-3xl font-bold">Latest Posts</h2>
      <div className="flex flex-col">
        {articles.map((article, i) => (
          <Item article={article.data} slug={article.slug} key={i} />
        ))}
      </div>
    </div>
  );
};
export default List;
