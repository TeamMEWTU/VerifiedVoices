imprt { gql } from '@apollo/client'

export const GET_SUBREDDIT_BY_TOPIC = gql`
    query MyQuery($topic: String!) {
        getSubredditListByTOpic(topic: $topic) {
            id
            topic
            created_at
        }
    }
`