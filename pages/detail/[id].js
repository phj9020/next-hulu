import Image from 'next/image';
import {requests} from '../../util/requests';



export const getStaticPaths = async() => {
    const BASE_URL = 'https://api.themoviedb.org/3'
    const requestList = Object.entries(requests).map( ([key, {title, url}]) => url);

    let data;
    // fetch multiple urls 
    try {
        data = await Promise.all(
            requestList.map(url => fetch(BASE_URL + url).then(res => res.json()))
        )
    } catch (e) {
        console.log(e)
    }

    const paths = data?.map(result => result.results.map(item => {
        return {
            params: {id: item.id.toString()}
        }
    }));

    const mergeArrayPath = paths.flat(1);


    return {
        paths: mergeArrayPath,
        fallback: false
    }
};

export const getStaticProps  = async(context) => {
    console.log(context)
    const movie_id = context.params.id;
    const res = await fetch(`https://api.themoviedb.org/3/movie/${movie_id}?api_key=${process.env.REACT_APP_API_KEY}`);
    const data = await res.json();
    
    return {
        props: {
            data
        }  
    }
}


function Detail({data}) {
    const BASE_URL = "https://image.tmdb.org/t/p/original/";

    return (
        <div className="relative h-screen p-10">
            <Image 
                className="opacity-40"
                layout='fill'
                src={BASE_URL+data.backdrop_path} 
                alt="Post" 
                />
            <div className="flex flex-col justify-center items-center h-full sm:flex-row">
                <div className="mx-auto">
                    <Image 
                        src={BASE_URL+data.poster_path} 
                        alt="Post" 
                        width={700} 
                        height={900}
                        />

                </div>
                <div className="mx-8 text-white mt-10 z-30 sm:mt-0">
                    <h1 className="font-bold text-3xl mb-8">{data.title}</h1>
                    <p className="text-base mb-3">{data.overview}</p>
                    <p className="text-base mb-3">{data.genres.map(genre => <span key={genre.id}> • {genre.name}</span>)}</p>
                    <p className="mb-3">{data.status} on {data.release_date}</p>
                    <span className="block mb-3">Rate {data.vote_average}</span>
                    {data.homepage && 
                        <p className="mb-3 underline"><a href={data.homepage}>{data.homepage}</a></p>
                    }
                </div>

            </div>
        </div>
    )
}

export default Detail;
