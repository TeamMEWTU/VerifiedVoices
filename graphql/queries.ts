imprt { gql } from '@apollo/client'

export const GET_ALL_POSTS = gql`
    query MyQuery {
        getPostList {
            body
            created_at
            id
            image
            title
            subreddit_id
            username
        }
    }
`
// Inside of StepZen take advantage of materializer (join logic)
// Extend type Post
// add following to the type
votes: [Vote]
    @materializer(
        query: "getVotesByPostId",
        arguments: [{name: "post_id", field: "id"}]
    )
comments: [Comment]
    @materializer(
        query: 'getCommentByPostId',
        arguments: [{ name: "post_id", field: "id"}]
    )
/*
...
    subreddit: [Subreddit]
        @materializer(
            query: "getSubredditListById",
            arguments: [{ name: "id", field: "subreddit_id"}]
        )
*/

// Inside of our postresql, graphql
// Inside type Query {...}

/*
getCommentByPostId(post_id: ID!): [Comment]
    @dbquery(
        type: "postgresql"
        query: """
        select * from "comment" where "post_id" = $1
        """
        configuration: "postgresql_config"
    )

getVotesByPostId(post_id: ID!): [Vote]
    @dbquery(
        type: "postgresql"
        query: """
        select * from "vote" where "post_id" = $1
        order by "created_at" desc
        """
    )

 getSubredditListById(id: ID!): [Subreddit]
    @dbquery(
        type: "postresql"
        query: """
        select * from "subreddit" where "id" = $1
        """
        configuration: "postesql_config"
    )
*/
export const GET_SUBREDDIT_BY_TOPIC = gql`
    query MyQuery($topic: String!) {
        getSubredditListByTOpic(topic: $topic) {
            id
            topic
            created_at
        }
    }
`