import React from 'react';
import { Modal } from 'antd';
import ReactPlayer from 'react-player';
import { Poll } from '@mui/icons-material';
import { FaImdb } from 'react-icons/fa';
import Tooltip from 'antd/es/tooltip';
import './previewModal.scss';
import { base_url } from '../components/VideoCard';
import axios from '../axios';
import request, { API_KEY } from '../components/request';

const PreviewModal = ({ visible, setVisible, data, url }) => {
  const [movieD, setMovieD] = React.useState();
  React.useEffect(() => {
    axios
      .get(
        request.getMovieDetails +
          `/${data?.id}?api_key=${API_KEY}&language=en-us`
      ).then((res) => {
        setMovieD(res?.data)
      })
  }, []);
  return (
    <Modal
      centered
      visible={visible}
      onCancel={() => setVisible(false)}
      onOk={() => setVisible(false)}
      width={1060}
      footer={null}
      destroyOnClose>
      <div className="modal-continer">
        <div className="modal-container-left">
          <ReactPlayer
            height={400}
            width="100%"
            light={`${base_url}${data?.backdrop_path}`}
            url={url}
            controls={true}
            pip={true}
          />
        </div>
        <div className="modal-container-right">
          <h2 style={{ color: '#fff', margin: '10px 0px', fontWeight: 500 }}>
            {data?.original_title || data?.title}
          </h2>
          <span>
            <small>{movieD?.tagline}</small>
          </span>
          <p>{data?.overview}</p>
          <p>Run Time : {movieD?.runtime} Mins</p>
          <p>
            Genre : {''}
            {movieD?.genres?.map((_data, idx) => 
              <span key={idx}>{_data?.name} || 
              </span>
            )}
          </p>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <Poll style={{ fontSize: '30px', marginRight: '10px' }} />
            {data?.vote_count} || {data?.release_date}
          </span>
          <span
            style={{
              display: 'flex',
              alignItems: 'center',
            }}>
            <FaImdb style={{ fontSize: '30px', marginRight: '10px' }} />
            {data?.vote_average}
          </span>
          <span
            style={{
              margin: '10px 0px',
            }}>
            Production Houses :{' '}
            {movieD?.production_companies?.map((_, idx) => 
              <Tooltip title={_?.name} placement={'top'} key={idx}>
                <img src={`${base_url}${_?.logo_path}`} alt="logo" height={30} width={100} style={{margin: '0px 10px'}} />
              </Tooltip>
            )}
          </span>
        </div>
      </div>
    </Modal>
  );
};

export default PreviewModal;
