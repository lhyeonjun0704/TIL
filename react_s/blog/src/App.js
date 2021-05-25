import logo from './logo.svg';
import './App.css';

// 데이터 바인딩이 쉬운게 react!
function App() {
  return (
    // JSX라는 걸로 써야된다!(html대용이다)
    <div className="App"> 
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <h4>블로그 글</h4>
    </div>
  );
}

export default App;
