/* eslint-disable */  // 노란색 warning을 보고 싶지 않다.

// import logo from './logo.svg';
import './App.css';
import React, { Profiler, useState } from 'react';

// 데이터 바인딩이 쉬운게 react/angular/vue!
function App() {
  
  // var [a, b] = [10, 100]; // 각각 변수에 저장 가능

  let [글제목, 글제목변경] = useState(['해외 여행 추천지', '국내 여행 추천지',
'이색 여행 추천지']); // array가 남는다.
  // state 작성의 장점 앱처럼 쓰고 싶으면 state에 저장해놔야 가능하다. 재랜더링이 필요 없다.
  let [따봉수, 따봉변경] = useState(0);
  let [modal, modal변경] = useState(false);
  let [제목넘버, 제목넘버변경] = useState(0);
  // let [입력, 입력값변경] = useState(' '); 
  let [제목입력, 제목입력변경] = useState(' ');

  // 원래의 반복문
  // function 반복된UI(){

  //   var array = [];
  //   for(var i = 0; i < 3; i++){
  //     array.push(<idv>안녕</idv>)
  //   }

  //   return array
  // }


  // var array = [2,3,4];
  // array.map(function(a){ // array 내의 모든 데이터에 똑같은 작업을 시켜주고 싶을 때 .map()
  //   return a * 2
  // })

  function modal바꾸기(){
    if(modal === true){
      modal변경(false);
    } else{
      modal변경(true);
    }
  };

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
      
        <button onClick={ modal바꾸기 }>버튼</button>
        {/* <button onClick={() => { 제목넘버변경(0) }}>버튼1</button>
        <button onClick={() => { 제목넘버변경(1) }}>버튼2</button>
        <button onClick={() => { 제목넘버변경(2) }}>버튼3</button> */}
      
      {
        // {반복할 데이터.mpa(() => { return <html> })}
        글제목.map((글, i) => { // i는 map 돌때 마다 0,1,2로 증가한다
          return (<div className='list' key={i}>    
          <h3 onClick={() => { 제목넘버변경(i) }}>{ 글 }<span onClick={ () => {따봉변경(따봉수 + 1)} }>👍</span> {따봉수}</h3>
          <p>2월 17일 발행</p>
          <hr /> 
          </div>)
        })
      }

      <div className='publish'>
        <input onChange={(e) => {
          제목입력변경(e.target.value)
          console.log(e.target.value)
        }} />
        <butoon onClick={() => {
          var arrayCopy = [...글제목];
          arrayCopy.unshift(제목입력);
          글제목변경(arrayCopy);
        }}>저장</butoon>
      </div>
      
      {/* <Profile /> */}

      {/* <input onChange={(e) => {
        입력값변경(e.target.value)
        console.log(입력)
      }}></input> */}

      {
        modal === true
        ? <Modal 글제목={글제목} 제목넘버={제목넘버} />
        : null // 텅빈 HTML이라는 뜻이다. 아무것도 출력하고 싶지 않다.
        //선생 모범답안 onClick={() => {modal변경(!modal)}}
      }

      {/* {반복된UI()} */}

    </div>
  );


}

// componoent는 대문자로 만드는것이 관습 같은것.
// 중괄호 안에 return으로 하여 html을 넣을 수 있다. 묶을 때는 fragment쓰자 <> </>로 쓰면 된다.
// component안에 component를 만들 수 있고 그냥 장점은 만들어 놓으면 관리가 편하다는 뜻이다.
// component는 반복되는 UI같은 것들을 치환하면 아주 편하고 도움이 된다.
// 사이트에서 자주 바뀌는 UI같은 것들을 치환하면 성능적으로 향상된다. state를 쓰게되면 복잡해진다.
// state는 지역변수같은 개념이라 props라는 문법을 이용해서 옮길 수 있다.
function Modal(props){ // 부모에게 전달받은 props는 props안에 다 있다.
  return(
    <div className='modal'>
        <h2>{ props.글제목[props.제목넘버] }</h2>
        <p>날짜</p>
        <p>상세내용</p>
      </div>
  )
}

//여기 잠시 초기 react의 문법을 확인해보자
// 초기 react component 만드는법
// class Profile extends React.Component{
//   constructor(){
//     super();
//     this.state = { name : 'Kim', age : 30}
//   }

//   chagneName(){
//     //함수 만드는법~
//     // this.setState(~~~)
//   }

//   render(){
//     return(
//       <div>
//         <h3>프로필입니다.</h3>
//         <p>저는 { this.state.name} 입니다.</p>
//         <button onClick={() => { this.setState({ name: 'Park' }) }}>버튼</button>
//       </div>
//     )
//   }
// }

export default App;
