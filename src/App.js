import React from 'react';
import {
  BrowserRouter as Router,
  Switch,
  Route,
  Link
} from "react-router-dom";
import styled from 'styled-components';
import { Form } from './features/enrolmentForm/EnrolmentForm';
import { StudentList } from './features/studentList/studentList'


const Button = styled.button`
    margin-right: 50px;
    margin-top: 20px;
    margin-bottom: 20px;
    width: 100px;
    cursor: pointer;
    background-color: #05224b;
    border-radius: 10px;
    color: #eff7ff;
    height: 40px;
    font-size: 1rem;
`
const ButtonContainer = styled.div`
  display: flex;
  flex-direction: row;
  justify-content: end;
  background: #1d1c1c;
  width: 100%;
`
const Container = styled.div`
  //min-height: 100vh;
  display: flex;
  flex-direction: column;
  align-items: center; 
  justify-content: center;
  font-size: calc(10px + 2vmin);
  background-color: #eee;
  //height: 900px;
`
const AppBar = styled.div`
  background: linear-gradient(-90deg, #054b3b, #05224b);
  height: 60px;
  width: 100%;
  margin: 0;
`
const Title = styled.h1`
  color: #fff;
  font-family: monospace, sans-serif;
  font-size: 1.5rem;
  margin-left: 50px;
`
function App() {
  return (
    <Container>
      <AppBar>
        <Title>SAF skool</Title>
      </AppBar>
      <Router>
        <ButtonContainer>
          <Link to='/'>
            <Button>Home</Button>
          </Link>
          <Button>Admission</Button>
          <Link to="enrol">
            <Button>Enrol</Button>
          </Link>
        </ButtonContainer> 
      <Switch>
      <Route path="/enrol">
          <Form></Form>
        </Route>
        <Route path="/">
          <StudentList></StudentList>
        </Route>
      </Switch>
      </Router>
    </Container>
  );
}

export default App;
