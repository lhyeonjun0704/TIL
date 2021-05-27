import './App.css';
import { Navbar, Nav, NavDropdown, Container, Jumbotron, Button } from 'react-bootstrap';
import React, { useState } from 'react';
import Shoe_d from './data.js';
import Detail from './Detail.js';
import axios from 'axios';

import { Link, Route, Switch} from 'react-router-dom'; // Switch로 중복되도 한개만보여주세요. exact 대신쓰지 않을까

// ajax는 서버에 새로고침없이 요청을 할 수 잇게 도와줌.
// 요청은 종류는 주소창통한 GET / Post/Del/Put
// 1. Jquery의 $.ajax() 2. axios의 axios.get() 3. javascript의 fetch()
// react에서는 보통 axios를 쓴다. 


function App() {

  let [shoes, shoesmodify] = useState(Shoe_d);

  return (
    <div className="App">
      <Navbar bg="light" expand="lg">
        <Container>
          <Navbar.Brand href="#home">Health Shop</Navbar.Brand>
          <Navbar.Toggle aria-controls="basic-navbar-nav" />
          <Navbar.Collapse id="basic-navbar-nav">
            <Nav className="ml-auto">
              <Nav.Link as = {Link} to='/'>Home</Nav.Link>
              <Nav.Link as = {Link} to ='/detail'>Detail</Nav.Link>
              <NavDropdown title="Dropdown" id="basic-nav-dropdown">
                <NavDropdown.Item href="#action/3.1">Action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.2">Another action</NavDropdown.Item>
                <NavDropdown.Item href="#action/3.3">Something</NavDropdown.Item>
                <NavDropdown.Divider />
                <NavDropdown.Item href="#action/3.4">Separated link</NavDropdown.Item>
              </NavDropdown>
            </Nav>
          </Navbar.Collapse>
        </Container>
      </Navbar>

    <Switch> 

      <Route exact path='/'>
        <Jumbotron className='background'>
          <h1>Be Healthy</h1>
          <p>
            This is a simple hero unit, a simple jumbotron-style component for calling
            extra attention to featured content or information.
          </p>
          <p>
            <Button variant="primary">Learn more</Button>
          </p>
        </Jumbotron>

       <div className='container'>
        <div className='row'>
          {
            shoes.map((a, i) => {
              return  <Items shoes={shoes[i]} i = {i} />  
            })
          }
        </div>
      </div>
      </Route>

      <Route path='/detail/:id'> {/*아무문자나 받겠다는 URL작명*/}
          <Detail shoes={shoes} />
      </Route>

      {/* <Route path='/어쩌구' component={modal}></Route> */}
      
      <Route path="/:id">
          <div>아무거나 적었을 때 이거 보여주셈.</div>
      </Route>
    </Switch>

    <butoon className='btn btn-primary'>더보기</butoon>

    </div>
  );
}

function Items(props){
  return(
      <div className='col-md-4'>
            <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width='100%' />
            <h4>{ props.shoes.title }</h4>
            <p>{ props.shoes.content}</p>
      </div>
  )
}




//38 - container(좌우 여백) 39 - row 페이지 12등분
// 40~42 md는 모바일 사이즈에서 세로로 3등분


export default App;
