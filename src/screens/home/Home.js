import React from 'react';
import { Button } from 'antd';
import logo from './logo.svg';
import './Home.less';

const Home = () => (
  <div className="home">
    <header className="home__header">
      <img src={logo} className="home__logo" alt="logo" />
      <p>
        Edit <code>src/App.js</code> and save to reload.
      </p>
      <Button type="primary">Learn React</Button>
    </header>
  </div>
);

export default Home;
