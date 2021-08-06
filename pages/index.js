import Head from 'next/head';
import Header from '../components/Header';
import Nav from '../components/Nav';
import Results from '../components/Results';
import {requests} from '../util/requests';

export const getServerSideProps = async (context) => {
    const genre = context.query.genre;
    const res = await fetch(`https://api.themoviedb.org/3${requests[genre]?.url || requests.fetchingTrending.url}`);
    const data = await res.json();
    
    if(!data) {
      return {
        notFound: true,
      }
    }

    return {
      props: {
        data
      }
    }

}

export default function Home({data}) {

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
      <Results data={data} />
    </div>
  )
}
