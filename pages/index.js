import Head from 'next/head'
import Main from '../components/Main'
import Projects from '../components/Projects'
import TicTacToe from '../components/TicTacToe'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Makenson Noel | Software Engineer </title>
        <meta name="description" content="Software Engineer with a Bachelor of Science in Computer Science" />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <Projects />
    <TicTacToe />
    </div>
   
  )
}
