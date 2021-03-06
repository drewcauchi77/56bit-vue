import gql from 'graphql-tag';

// To get all the case studies in ascending order according to the publish date

export const caseStudiesQuery = gql`
    query getCaseStudies{
        caseStudies(sort: "published_at:desc"){
            id
            slug
            CaseStudyTitle
            CaseStudyExcerpt
            ClientName
            ClientFeaturedImage{
                url
                alternativeText
            }
        }
    }
`