import Thumbnail from './Thumbnail';
import FlipMove from 'react-flip-move';

function Results({data}) {

    return (
        <FlipMove className="my-10 px-5 sm:grid md:grid-cols-2 gap-1 lg:grid-cols-3 xl:grid-cols-4 2xl:grid-cols-5
            3xl:flex flex-wrap justify-center" >
            {data?.results.map(item => <Thumbnail key={item.id} result={item} />)}
        </FlipMove>
    )
}

export default Results
