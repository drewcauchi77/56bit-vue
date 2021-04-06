import gql from 'graphql-tag';

// To get a single blog by slug - to also set the slug as the url suffix

export const blogQuery = gql`
    query getBlog( $slug: String! ){
        blogs( where: { slug: $slug } ){
            id
            slug
            BlogPostTitle
            BlogContent
            BlogFeaturedImage{
                url
                alternativeText
            }
        }
    }
`