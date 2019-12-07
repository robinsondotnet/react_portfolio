const path = require("path");

const ArticleTemplate = path.resolve(
  `${__dirname}/src/templates/Article.Template.tsx`
);

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;

  return new Promise(async resolve => {
    const result = await getData(graphql);
    const {
      data: { allMdx }
    } = result;

    // Create article pages
    allMdx.nodes.forEach(node => {
      createPage({
        path: `blog/${node.frontmatter.slug}`,
        context: { id: node.id },
        component: ArticleTemplate
      });
    });

    resolve();
  });
};

async function getData(graphql) {
  return graphql(`
    {
      allMdx {
        nodes {
          id
          frontmatter {
            slug
          }
        }
      }
    }
  `);
}
