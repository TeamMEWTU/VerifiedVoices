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
            $body: $body
            $image: $image
            $subreddit_id: $subreddit_id
            $title: $title
            $username: $username
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

// Add into PostBox later
const onSubmit = handleSubmit(async (formData) => {
    console.log('Formdata', formData)
    try {

    } catch (error) {

    }
})

// Create custom get subform qury
getSubredditListByTopic(topic: String!): [Subreddit]
    @dbquery[
        type: "postgresql"
        query: """
        select * from "subreddit" where "topic" = $1
        """
        configuration: "postgresql_config"
    ]