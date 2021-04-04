import gql from 'graphql-tag';

// To get a single case study by slug - to also set the slug as the url suffix

export const caseStudyQuery = gql`
    query getCaseStudy( $slug: String! ){
        caseStudies( where: { slug: $slug } ){
            id
            slug
            CaseStudyTitle
            CaseStudyExcerpt
            ClientFeaturedImage{
                url
                alternativeText
            }
        }
    }
`