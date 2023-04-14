import Head from 'next/head'
import About from '../components/About'
import Main from '../components/Main'
import Projects from '../components/Projects'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Makenson | Software Engineer</title>
        <meta name="description" content="Innovative, passionate, and motivated software developer simplifying complex problems through code." />
        <link rel="icon" href="/fav.png" />
      </Head>
      <Main />
      <About />
      <Projects />
    {/*<Contact />*/}
    </div>
  )
}
