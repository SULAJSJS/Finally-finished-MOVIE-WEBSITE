import React from 'react';
import VideoCard from './VideoCard';
// import FlipMove from 'react-flip-move';
import './scss/results.scss';
import axios from '../axios';
import { Skeleton } from 'antd';


const Results = ({selectedOption}) => {
    const [movies, setMovies] = React.useState()
    React.useEffect(() => {
        async function fetchData(){
            setMovies()
            const request = await axios.get(selectedOption)
            setMovies(request.data.results)
            return request 
        }
        fetchData()
    }, [selectedOption])

    console.log(movies)
  return (
    <div className="results">
        {!movies &&
            [...Array(20).map((_, idx) => (<>
            <div key={idx}>
                <Skeleton.Input
                    active
                    style={{
                    margin: '20px',
                    width: 240,
                    height: 350,
                    borderRadius: '4%'
                    }}
                />
            </div>
            </>))]
        }
        {
            movies?.map((data, idx) => <VideoCard key={idx} data={data} />)
        }
    </div>
  );
};

export default Results;
