import { gql } from "@apollo/client";
import { GET_SUBREDDIT_BY_TOPIC } from "./queries";

// Add to postgres.graphql
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

export const ADD_SUBREDDIT = gql`
    mutation MyMutation(topic: String!) {
        insertSubreddit(topic: $topic) {
            id
            topic
            created_at
        }
    }
`


// Add into PostBox later
// Import ADD_POST, ADD_SUBREDDIT
// Import client
// Import GET_SUBREDDIT_BY_TOPIC
// Import toast

const [addPost] = useMutation(ADD_POST);
const [addSubreddit] = useMutation(ADD_SUBREDDIT);

const onSubmit = handleSubmit(async (formData) => {
    console.log('Formdata', formData)
    const notification = toast.loading('Creating new post...')
    try {
        const { data: { getSubredditListByTopic } } = await client.query!({
            query: GET_QUERY_BY_SUBREDDIT,
            variables: {
                topic: formData.subreddit
            }
        })

        const subredditExists = getSubredditListByTopic.length > 0;
        if (!subredditExists) {
            const {data: { insertSubreddit: newSubreddit }} = await addSubreddit({
                variables: {
                    topic: formData.subreddit
                }
            })
            console.log('Creating post', formData)
            const image = formData.postImage || '';

            const {data: { insertPost: newPost}} = await addPost({
                variables: {
                    body: formData.postBody,
                    image: image,
                    subreddit_id: newSubreddit.id,
                    title: formData.postTitle,
                    username: session?.user?.name,
                }
            })
        } else {
            const image = formData.postImage || ''

            const {data: { insertPost: newPost}} = await addPost({
                variables: {
                    body: formData.postBody,
                    image: image,
                    subreddit_id: getSubredditLIstByTopic[0].id,
                    title: formData.postTitle,
                    username: session?.user?.name,
                }
            })
            console.log('New post added', newPost)
        }
        setValue('postBody','');
        setValue('postImage','');
        setValue('postTitle','');
        setValue('subreddit','');

        toast.success('New Post Created!', {
            id: notification
        })
    } catch (error) {
        toast.error('Whoops we messed up! Check this out!')
    }
})

// Create custom get subform qury
getSubredditListByTopic(topic: String!): [Subreddit]
@dbquery(
    type: "postgresql"
        query: """
        select * from "subreddit" where "topic" = $1
        """
        configuration: "postgresql_config"
)

insertSubreddit(topic: String!): GET_SUBREDDIT_BY_TOPIC 
    @dbquery(
        type: "postgresql"
        table: "subreddit"
        dml: INSERT
        configuration: "postgresql_config"
    )

// Yarn add react toast
// Put toaster in your app.tsx