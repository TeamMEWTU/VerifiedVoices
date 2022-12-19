import NextAuth from 'next-auth'
import RedditProvider from 'next-auth/providers/reddit'

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // Add as many providers as you like to this array
    RedditProvider({
      clientId: process.env.REDDIT_CLIENT_ID,
      clientSecret: process.env.REDDIT_CLIENT_SECRET
    })
  ],
  // A database is optional, but required to persist accounts in a database
})