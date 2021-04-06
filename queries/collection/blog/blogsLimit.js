import gql from 'graphql-tag';

// To get all 3 blogs in descending order according to the publish date

export const blogsLimitQuery = gql`
    query getBlogsLimit{
        blogs(limit: 3, sort: "published_at:desc"){
            id
            slug
            BlogPostTitle
            BlogFeaturedImage{
                url
                alternativeText
            }
        }
    }
`