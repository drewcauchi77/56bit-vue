import gql from 'graphql-tag';

// To get all blogs in descending order according to the publish date

export const blogsQuery = gql`
    query getBlogs{
        blogs(sort: "published_at:desc"){
            id
            slug
            BlogPostTitle
            BlogPostExcerpt
            BlogFeaturedImage{
                url
                alternativeText
            }
        }
    }
`