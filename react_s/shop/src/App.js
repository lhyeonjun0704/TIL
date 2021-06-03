import './App.css';
import { Navbar, Nav, NavDropdown, Container, Jumbotron, Button } from 'react-bootstrap';
import React, { useContext, useState, lazy, Suspense } from 'react';
import Shoe_d from './data.js';
import axios from 'axios';
import Cart from './Cart.js';
import { Link, Route, Switch, useHistory} from 'react-router-dom'; // Switch로 중복되도 한개만보여주세요. exact 대신쓰지 않을까

// import Detail from './Detail.js';
let Detail = lazy(() => { return import('./Detail.js') }); 
//lazy loading 이 컴포넌트가 필요해 졌을 때 로딩해 달라.



// 컴포넌트 import 할 때 미리 다 로드하기 때문에 부담이 될 수 있다. 개르서 lay loading을 쓴다.


// ajax는 서버에 새로고침없이 요청을 할 수 잇게 도와줌.
// 요청은 종류는 주소창통한 GET / Post/Del/Put
// 1. Jquery의 $.ajax() 2. axios의 axios.get() 3. javascript의 fetch()
// react에서는 보통 axios를 쓴다. 



export let stockcontext = React.createContext(); // 같은 변수값을 공유할 범위 생성


function App() {

  let [shoes, shoesmodify] = useState(Shoe_d);
  let [stock_n, stockmodi] = useState([10, 11, 12]);

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

        <stockcontext.Provider value={stock_n}>
        <div className='row'>
          {
            shoes.map((a, i) => {
              return  <Items shoes={shoes[i]} i = {i}  />  
            })
          }
        </div>

        <butoon className='btn btn-primary' onClick={() => {

          //post 예제
          // axios.post('서버URL', { id : 'asdfds', pw: 12314 });


          // {
          //   loading ui 
          // }

          axios.get('https://codingapple1.github.io/shop/data2.json')
          .then((result) => {
            // loading ui x
            console.log(result.data); //axios는 json을 미리 바꿔서 데이터를 제공해 준다.
            shoesmodify([...shoes, ...result.data]); // ... 괄호를 벗겨준다.
          }) // 성공했을 떄 실행 함수
          .catch(() => {
            
          }) // 실패했을 때 실행 함수

          // 1. axios.get(데이터 요청할 URL)

          }}>더보기</butoon>


        </stockcontext.Provider>


      </div>
      </Route>


      <Route path='/detail/:id'> {/*아무문자나 받겠다는 URL작명*/}

         <stockcontext.Provider value={stock_n}>
          <Suspense fallback={<div>로딩중이에요.</div>}> 
          <Detail shoes={shoes} stock_n={stock_n} stockmodi={stockmodi} />
          </Suspense>
        </stockcontext.Provider>
     
      </Route>

      
      <Route path='/cart'>
          <Cart></Cart>

      </Route>
     

      
      {/* <Route path='/어쩌구' component={modal}></Route> */}
      
      <Route path="/:id">
          <div>아무거나 적었을 때 이거 보여주셈.</div>
      </Route>
    </Switch>

    

    </div>
  );
}

function Items(props){

  let stock = useContext(stockcontext); // props 없이 쓸 수 있게 된다. 3중이상의 중복에서 쓰기 편한 방법이다.
  let history = useHistory();

  return(
      <div className='col-md-4' onClick={() => { history.push('/detail/' + props.shoes.id) }}>
            <img src={"https://codingapple1.github.io/shop/shoes" + (props.i + 1) + ".jpg"} width='100%' />
            <h4>{ props.shoes.title }</h4>
            <p>{ props.shoes.content}</p>
            <Test></Test>
      </div>
  )
}

function Test(){

  let stock = useContext(stockcontext);

  return <p>재고 : {stock}</p>
}



//38 - container(좌우 여백) 39 - row 페이지 12등분
// 40~42 md는 모바일 사이즈에서 세로로 3등분


export default App;
