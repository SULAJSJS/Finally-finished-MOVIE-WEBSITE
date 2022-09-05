import React from 'react';
import request from './request';
import './scss/navbar.scss';

const Navbar = ({ setSelectedOption }) => {
  const [activeKey, setActiveKey] = React.useState(1);
  return (
    <div className="navbar">
      <h3
        onClick={() => {
          setActiveKey(1);
          setSelectedOption(request.fetchTrending);
        }}
        className={activeKey === 1 && `active`}>
        Trending
      </h3>
      <h3
        onClick={() => {
          setActiveKey(2);
          setSelectedOption(request.fetchTopRated);
        }}
        className={activeKey === 2 && `active`}>
        Top Rated
      </h3>
      <h3
        onClick={() => {
          setActiveKey(3);
          setSelectedOption(request.fetchActionMovies);
        }}
        className={activeKey === 3 && `active`}>
        Action
      </h3>
      <h3
        onClick={() => {
          setActiveKey(4);
          setSelectedOption(request.fetchComedyMovies);
        }}
        className={activeKey === 4 && `active`}>
        Comedy
      </h3>
      <h3
        onClick={() => {
          setActiveKey(5);
          setSelectedOption(request.fetchHorroMovies);
        }}
        className={activeKey === 5 && `active`}>
        Horror
      </h3>
      <h3
        onClick={() => {
          setActiveKey(6);
          setSelectedOption(request.fetchRomanticMovies);
        }}
        className={activeKey === 6 && `active`}>
        Romans
      </h3>
      <h3
        onClick={() => {
          setActiveKey(7);
          setSelectedOption(request.fetchMystery);
        }}
        className={activeKey === 7 && `active`}>
        Mystery
      </h3>
      <h3
        onClick={() => {
          setActiveKey(8);
          setSelectedOption(request.fetchSciFi);
        }}
        className={activeKey === 8 && `active`}>
        Sci-Fy
      </h3>
      <h3
        onClick={() => {
          setActiveKey(9);
          setSelectedOption(request.fetchWestern);
        }}
        className={activeKey === 9 && `active`}>
        Western
      </h3>
      <h3
        onClick={() => {
          setActiveKey(10);
          setSelectedOption(request.fetchAnimation)
        }}
        className={activeKey === 10 && `active`}>
        Animation
      </h3>
    </div>
  );
};

export default Navbar;
