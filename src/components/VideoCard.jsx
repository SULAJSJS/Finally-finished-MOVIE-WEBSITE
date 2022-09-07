import React from 'react';
import { PlayCircle, Poll, SettingsRemoteOutlined } from '@mui/icons-material';
import { FaImdb } from 'react-icons/fa';
import './scss/videocard.scss';
import ReactCardFlip from 'react-card-flip';
import PreviewModal from '../utils/PreviewModal';
import { truncate } from '../utils/truncate';
import movieTrailer from 'movie-trailer';


export const base_url = 'https://image.tmdb.org/t/p/original';

const VideoCard = ({data}) => {
  const [flipped, setFlipped] = React.useState(false);
  const [visible, setVisible] = React.useState(false);
  const [url, setUrl] = React.useState("")
  React.useEffect(() => {
    movieTrailer(data?.original_title || data?.title)
    .then((res) => {
        setUrl(res)
    }).catch((err) => {
        console.error(err, "Temporarily Unavailable")
    })
  }, [data?.original_title, data?.title])

  return (
    <>
      <ReactCardFlip isFlipped={!flipped} flipDirection="horizontal">
        {/*back side*/}
        <div
          style={{ width: 250, height: 435, cursor: 'pointer' }}
          onClick={() => setFlipped(!flipped)}
          className="videoCard">
          <div className="videocard">
            <h2 style={{ color: '#fff' }}>{truncate(data?.title, 150)}</h2>
            <p>{truncate(data?.overview, 150)}</p>
            <span
              style={{
                display: 'flex',
                alignItems: 'center'
              }}>
              <Poll
                style={{
                  marginRight: '10px',
                  fontSize: '30px',
                }}
              />
              {data?.vote_count} || {data?.release_date}
            </span>
            <span
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '5px 0px',
                flex: 1,
              }}>
              <FaImdb
                size={'30px'}
                style={{
                  marginRight: '10px',
                }}
              />
              {data?.vote_average}
            </span>
            <span
              onClick={() => setVisible(true)}
              style={{
                display: 'flex',
                alignItems: 'center',
                margin: '50px 0px',
                flex: 1,
              }}>
              {/* play icon */}
              <PlayCircle
                style={{
                  marginRight: '10px',
                  fontSize: '60px',
                  color: 'rgba(22, 218, 142, 1)',
                }}
              />
              <strong
                style={{
                  fontSize: '25px',
                  fontWeight: 400,
                  margin: '0px 5px',
                }}>
                Watch Now
              </strong>
            </span>
          </div>
        </div>
        {/*front side*/}
        <div
          style={{ width: 250, height: 435, cursor: 'pointer' }}
          onClick={() => setFlipped(!flipped)}
          className="videoCard">
          <img
            src={`${base_url}${data?.poster_path}`}
            alt="poster"
          />
          <h3
            style={{
              margin: '0px 10px',
              color: '#fff',
              fontWeight: 600
            }}>
            {truncate(data?.title, 18)}
          </h3>
        </div>
      </ReactCardFlip>
      <PreviewModal visible={visible} setVisible={setVisible} data={data} url={url} />
    </>
  );
};

export default VideoCard;
