import NextAuth from 'next-auth'
import RedditProvider from 'next-auth/providers/reddit'
import LinkedInProvider from "next-auth/providers/linkedin";

export default NextAuth({
  // Configure one or more authentication providers
  providers: [
    // Add as many providers as you like to this array
    LinkedInProvider({
      clientId: process.env.LINKEDIN_CLIENT_ID,
      clientSecret: process.env.LINKEDIN_CLIENT_SECRET
    })
  ],
  // A database is optional, but required to persist accounts in a database
})