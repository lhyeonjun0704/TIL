import React from 'react';
import ReactDOM from 'react-dom';
import './index.css';
import App from './App';
import reportWebVitals from './reportWebVitals';

import { BrowserRouter} from 'react-router-dom'; // HashRouter는 url에 #이 추가
// Hash에서 #뒤에 적는 것은 서버로 전달이 되지 않는다. 그렇기 때문에 라우팅이 더 안전하게 가능.

import {Provider} from 'react-redux'; // redux sep1 
import { combineReducers, createStore } from 'redux'; // redux step2

let alert초기값 = true;

function reducer2(state = alert초기값, 액션){

  if(액션.type === 'alert닫기'){
    state = false;

    return state
  } else{
    return state
  }

}


  
let 기본state = [
    { id: 0, name: '멋진실발', quan : 2 },
    { id: 1, name: '멋진실발2', quan : 1}
];


// reducder는 별거 아니고 그냥 수정된 state를 퉤 뱉는 함수이다.
function reducer(state = 기본state, 액션){ // default parameter라는 문법이다. 

  if( 액션.type === '항목추가'){
    
    let copy = [...state];
    copy.push( 액션.payload );
    return copy

  } else if(액션.type === '수량증가'){ //

    let copy = [...state];
    copy[액션.데이터].quan++;

    return copy

  } else if(액션.type === '수량감소'){

    let copy = [...state];
    copy[액션.데이터].quan--;

    return copy

  }else{

    return state
  }

}

let store = createStore(combineReducers({reducer, reducer2})); 
// reducder여러개 할 떄는 combineReducers({})


//state값 저장
// redux 쓰는 이유2. state데이터 관리쉬움. 하지만 수정이 좀 어려움
 




ReactDOM.render(
  <React.StrictMode>
    <BrowserRouter>
    <Provider store={store}>
     <App />
    </Provider>
    </BrowserRouter>
  </React.StrictMode>,
  document.getElementById('root')
);

// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals


reportWebVitals();