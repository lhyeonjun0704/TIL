import { Navbar, Nav, NavDropdown, Form, FormControl, Button, Jumbotron } from 'react-bootstrap';
import './App.css';

function App() {
  return (
    <div className="App">
      <Navbar bg="light" expand="lg"> 
        <Navbar.Brand href="#">Navbar scroll</Navbar.Brand>
        <Navbar.Toggle aria-controls="navbarScroll" />
        <Navbar.Collapse id="navbarScroll">
          <Nav
            className="mr-auto my-2 my-lg-0"
            style={{ maxHeight: '100px' }}
            navbarScroll
          >
            <Nav.Link href="#action1" id='nav_menu'>보디빌더 대회</Nav.Link>
            <Nav.Link href="#action2" id='nav_menu'>유명 헬스유투버</Nav.Link>
            <Nav.Link href="#action6" id='nav_menu'>상품 리뷰</Nav.Link>
            <NavDropdown title="게시판" id="navbarScrollingDropdown">
              <NavDropdown.Item href="#action3">운동팁 게시판</NavDropdown.Item>
              <NavDropdown.Item href="#action4">자유 게시판</NavDropdown.Item>
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

    <Jumbotron className='background'>
          <p className='letter'>Are you<br /> READY TO CHANGE?
          </p>
    </Jumbotron>

   </div>
  );
}

export default App;
