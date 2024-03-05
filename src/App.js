import React from 'react';
import 'bootstrap/dist/css/bootstrap.min.css';
import { Button, Navbar, Container, Nav } from 'react-bootstrap'
import { Routes, Route, Link, useNavigate, Outlet } from 'react-router-dom'
import styled from 'styled-components'
import './App.css';

import { data } from './components/data.js';


function App() {

  let navigate = useNavigate();

  return (

    <div>
      {data.map((item) => (
        <div className='card' key={item.id}>
          <h2>{item.title}</h2>
          <p>{item.content}</p>
          <img className='imgsize' src={item.img} alt={item.title} />
        </div>
      ))}
    </div>

  );
}

export default App;
