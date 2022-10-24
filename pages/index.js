import Head from 'next/head'
import About from '../components/About'
import Contact from '../components/Contact'
import Main from '../components/Main'
import Projects from '../components/Projects'

export default function Home() {
  return (
    <div>
      <Head>
        <title>Makenson Noel | Software Engineer</title>
        <meta name="description" content="I’m a Software Engineer and First Generation STEM College Graduate." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Projects />
    <Contact />
    </div>
  )
}
