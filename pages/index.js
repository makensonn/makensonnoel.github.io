import Head from 'next/head'
import About from '../components/About'
import Contact from './contact'
import Main from '../components/Main'
import Experience from '../components/Experience'
import Projects from '../components/Projects'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Makenson | Software Engineer</title>
        <meta name="description" content="Innovative, passionate, and motivated software developer simplifying complex problems through code. Seeking roles that apply programming skills and team collaboration to improve software and business applications." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Experience />
    <Projects />
    {/*<Contact />*/}
    </div>
  )
}
