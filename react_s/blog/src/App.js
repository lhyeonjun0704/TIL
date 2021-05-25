/* eslint-disable */  // 노란색 warning을 보고 싶지 않다.

import logo from './logo.svg';
import './App.css';
import { useState } from 'react';

// 데이터 바인딩이 쉬운게 react/angular/vue!
function App() {
  
  // var [a, b] = [10, 100]; // 각각 변수에 저장 가능

  let [글제목, 글제목변경] = useState(['해외 여행 추천지', '국내 여행 추천지',
'이색 여행 추천지']); // array가 남는다.
  // state 작성의 장점 앱처럼 쓰고 싶으면 state에 저장해놔야 가능하다. 재랜더링이 필요 없다.
  let [따봉수, 따봉변경] = useState(0);

  function 제목바꾸기(){
    var newArray = [...글제목]; //복사본 생성하여 수정하기 이건 deep copy! 오브젝트는 중괄호
    newArray[0] = '숙박 예약하기';
    글제목변경( newArray );
  }

  let posts = '강남 고기 맛집';

  return (
    // JSX라는 걸로 써야된다!(html대용이다)
    // css처럼 style 집어 넣을 때는 객체로 넣어야 한다. 근데 귀찮으니 className 넣자...
    <div className="App"> 
      <div className='black-nav'>
        <div>개발 Blog</div>
      </div>
      <button onClick={ 제목바꾸기 }>버튼</button>
      <div className='list'>    
          <h3>{ 글제목[0] }<span onClick={ () => {따봉변경(따봉수 + 1)} }>👍</span> {따봉수}</h3>
          <p>2월 17일 발행</p>
          <hr />
          <h3>{ 글제목[1] }</h3>
          <p>2월 17일 발행</p>
          <hr />
          <h3>{ 글제목[2] }</h3>
          <p>2월 17일 발행</p>
          <hr />
      </div>

      
      <Modal></Modal>
    </div>
  );


}

// componoent는 대문자로 만드는것이 관습 같은것.
// 중괄호 안에 return으로 하여 html을 넣을 수 있다. 묶을 때는 fragment쓰자 <> </>로 쓰면 된다.
// component안에 component를 만들 수 있고 그냥 장점은 만들어 놓으면 관리가 편하다는 뜻이다.
// component는 반복되는 UI같은 것들을 치환하면 아주 편하고 도움이 된다.
// 사이트에서 자주 바뀌는 UI같은 것들을 치환하면 성능적으로 향상된다. state를 쓰게되면 복잡해진다.
// state는 지역변수같은 개념이라 props라는 문법을 이용해서 옮길 수 있다.
function Modal(){
  return(
    <div className='modal'>
        <h2>제목</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

export default App;
