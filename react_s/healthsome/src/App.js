import React, {useState} from 'react';
import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Jumbotron} from 'react-bootstrap';
import './App.css';
import { Link, Route } from 'react-router-dom';
import Cheolsoon from './Cheolsoon.jpg';
import Minsoo from './Minsoo.jpg';
import Kangmin from './Kangmin.jpg';
import ImageSlider from './Components/Slider'
import MS from './Myeonseop.jpg'
import './css/App.scss'; 

function App() {

  


  return (
    <div className="App">
      <Navbar bg="light" expand="lg"> 
        <Navbar.Brand as ={Link} to='/'>Health Some</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link as ={Link} to='/bodybuild'>보디빌더 대회</Nav.Link>
            <Nav.Link as ={Link} to='/youtuber'>유명 헬스유투버</Nav.Link>
            <Nav.Link as ={Link} to='/review'>상품 리뷰</Nav.Link>
            <NavDropdown title="게시판" id="navbarScrollingDropdown">
              <NavDropdown.Item as ={Link} to='/some'>운동팁 게시판</NavDropdown.Item>
              <NavDropdown.Item as ={Link} to='/notice'>자유 게시판</NavDropdown.Item>
            </NavDropdown>
            
          </Nav>
          <Form className="d-flex">
            <FormControl
              type="search"
              placeholder="Search"
              className="mr-2"
              aria-label="Search"
            />
            <Button variant="outline-success">Search</Button>
          </Form>
        </Navbar.Collapse>
    </Navbar>
    
    {/* homepage start */}
    <Route exact path='/'>
    <Jumbotron className='background'>
          <p className='letter'>Are you<br /> READY TO CHANGE?
          </p>
    </Jumbotron>
    
    <div className='container mt-5 carousel'>
      <h1 className='slider_title'>유명 헬스유투버</h1>
      <ImageSlider Cheolsoon={Cheolsoon} Minsoo={Minsoo} Kangmin={Kangmin} MS={MS} />
    </div>

    </Route>


   </div>
  );
}

// ... is called spread operator



export default App;
