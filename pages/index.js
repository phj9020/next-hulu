import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';

export default function Home() {
  return (
    <div>
      <Head>
        <title>hulu</title>
        <meta name="description" content="search for moive" />
        <meta name="keywords" content="tv shows, movie, recent movies, popular movies" />
        <link rel="icon" sizes="128x128" href="/hulu.ico" />
      </Head>
      <Header />
      <Nav />
      {/* to do : result component */}
    </div>
  )
}
