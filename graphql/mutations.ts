import { gql } from "@apollo/client";

export const ADD_POST = gql`
    mutation MyMutation(
        $body: String!
        $image: String!
        $subreddit_id: ID!
        $title: String!
        $username: String!
    ) {
        insertPost(
            body: $body
            image: $image
            subreddit_id: $subreddit_id
            title: $title
            username: $username
        ) {
            body
            created_at
            id
            image
            subreddit_id
            title
            username
        }
    }
`

export const ADD_SUBREDDIT = gql`
    mutation MyMutation($topic: String!) {
        insertSubreddit(topic: $topic) {
            id
            topic
            created_at
        }
    }
`