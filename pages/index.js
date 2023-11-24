import Head from 'next/head'

import About from '../components/About'
import Main from '../components/Main'
import Projects from '../components/Projects'
import TicTacToe from '../components/TicTacToe'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Makenson Noel | Software Engineer </title>
        <meta name="description" content="Award winning Software Engineer | Front-End Engineer| Back-End Engineer | Full-Stack Engineer | Web Developer | Software Developer | PC Builder" />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Projects />
    <TicTacToe />
    </div>
   
  )
}