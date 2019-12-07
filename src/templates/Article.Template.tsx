import React from "react";
import { graphql } from "gatsby";
import { MDXRenderer } from "gatsby-plugin-mdx";

interface ArticleTemplateProps {
  data: {
    article: {
      frontmatter: {
        title: string;
        slug: string;
      };
      body: string;
    };
  };
}

const ArticleTemplate: React.FC<ArticleTemplateProps> = ({
  data: { article }
}) => {
  return (
    <div>
      <h1>{article.frontmatter.title}</h1>
      <MDXRenderer>{article.body}</MDXRenderer>
    </div>
  );
};

export default ArticleTemplate;

export const query = graphql`
  query($id: String!) {
    article: mdx(id: { eq: $id }) {
      frontmatter {
        title
        slug
      }
      body
    }
  }
`;
