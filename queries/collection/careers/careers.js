import gql from 'graphql-tag';

// To get all the case studies in ascending order according to the publish date

export const careersQuery = gql`
    query getCareers{
        careers(sort: "published_at:asc"){
            id
            VacancyTitle
            VacancyContent
        }
    }
`