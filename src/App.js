import './App.css';
import {React,useState}from 'react'
import styled from 'styled-components'
import MainTab from './MainTab'
function App() {
  return (
    <Container>
      <MainTab/>
    </Container>
  );
}

export default App;

const Container=styled.div`
  background-color:#D0D1F7;
  height: 100vh;
  width: 100vw;
  font-family: 'Roboto', sans-serif;
`