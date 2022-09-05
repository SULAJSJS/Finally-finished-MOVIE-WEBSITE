import React from 'react';
import { Person, Collections, Home, LiveTv, Search, TrendingUp } from '@mui/icons-material';
import './scss/header.scss';
import request from './request';
import { Dropdown, Input } from 'antd';
const Header = ({ setSelectedOption }) => {
  const onSearch = (value) => {
    let val = String(value).replace(' ', '+')
    setSelectedOption(request.searchMovies + val)
  }
  return (
    <div className="header">
      <div onClick={() => setSelectedOption(request.fetchAnimation)} className="header_icons">
        <div className="header_icon">
          <Home sx={{ fontSize: '30px' }} />
          <p>Home</p>
        </div>
        <div onClick={() => setSelectedOption(request.fetchTrending)} className="header_icon">
          <TrendingUp sx={{ fontSize: '30px' }} />
          <p>Trending</p>
        </div>
        <div onClick={() => setSelectedOption(request.fetchTV)} className="header_icon">
          <LiveTv sx={{ fontSize: '30px' }} />
          <p>Verified</p>
        </div>
        <div onClick={() => setSelectedOption(request.fetchTrending)} className="header_icon">
          <Collections sx={{ fontSize: '30px' }} />
          <p style={{ fontSize: '11px' }}>Collections</p>
        </div>
        <div className="header_icon">
          <Dropdown 
            overlay={
              <Input.Search 
                placeholder='Search Movies, Collections, TV...'
                enterButton='Search'
                size='large'
                onSearch={onSearch}
              />
            }
            placement={'bottomLeft'}
            overlayStyle={{
              background: 'transperent'
            }}
          >
            <Search sx={{ fontSize: '30px' }} />
          </Dropdown>
        </div>
        <div className="header_icon">
          <Person sx={{ fontSize: '30px' }} />
          <p>Account</p>
        </div>
      </div>
      <img
        src="https://hulu-matchmaker.s3.us-west-2.amazonaws.com/2020-08/Hulu_Logo-01_newgreen.png"
        alt="Hulu"
        className="hulu"
      />
    </div>
  );
};

export default Header;
