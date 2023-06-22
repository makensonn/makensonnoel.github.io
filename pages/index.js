import Head from 'next/head'
import About from '../components/About'
import Skills from '../components/Skills'
import Main from '../components/Main'
import Projects from '../components/Projects'


export default function Home() {
  return (
    <div>
      <Head>
        <title>Makenson Noel | Software Engineer</title>
        <meta name="description" content="If you're looking for a motivated and dedicated software engineer, please don't hesitate to reach out." />
        <link rel="icon" href="/fav.png" />
      </Head>
    <Main />
    <About />
    <Skills />
    <Projects />
    </div>
   
  )
}
