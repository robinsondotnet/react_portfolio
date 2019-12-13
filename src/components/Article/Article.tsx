import React from "react";
import classNames from "classnames";

interface ArticleProps {
  title: string;
  className?: string;
}

const Article: React.FC<ArticleProps> = ({ children, title, className }) => {
  return (
    <div className={classNames(className, "bg-blue-200 w-1/3")}>
      <h2 className="font-bold text-center uppercase tracking-wide my-2">
        {title}
      </h2>
      <div>{children}</div>
    </div>
  );
};

export default Article;
