import Head from 'next/head'
import Main from '../components/Main'
import Projects from '../components/Projects'
import TicTacToe from '../components/TicTacToe'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Makenson Noel's Portfolio</title>
        <meta name="description" content="If you're looking for a motivated and dedicated software engineer, please don't hesitate to reach out." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <Projects />
    <TicTacToe />
    </div>
   
  )
}
