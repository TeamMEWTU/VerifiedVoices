import type { NextPage } from 'next'
import Head from 'next/head'
import PostBox from '../components/PostBox'
import Feed from '../components/Feed'

const Home: NextPage = () => {
  return (
    <div className="max-w-5xl my-7 mx-auto">
      <Head>
        <title>Verified Voices</title>
      </Head>
    
    <PostBox />
    
    <div className="flex">
      <Feed />
    </div>
    </div>
  )
}

export default Home
