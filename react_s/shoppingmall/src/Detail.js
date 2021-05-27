import React, { useEffect, useState } from 'react';
import { propTypes } from 'react-bootstrap/esm/Image';
import { useHistory, useParams } from 'react-router-dom'; // 뒤로가기 위해서 씁니다!
import styled from 'styled-components';
import './Detail.scss';


// css를 프로그래밍언어스럽게 작성가능한 preprocessor 변수 연산자 등 사용가능하게.


//클래스 작명 필요없음.
let 박스 = styled.div` 
  padding : 20px;
`;

let 제목 = styled.h4`
  font-size : 25px;
  color : ${props => props.색상}
`;
// 다른 스타일의 제목이 필요할때?


function Detail(props){


  let [alert, alert변경] = useState(true);
  let [inputData, input변경] = useState();

    // input(update)될 때 마다 rendering이 계속 되기 때문에 이 함수도 계속 실행됨.
    useEffect(() => {
      let 타이머 = setTimeout(() => {
        alert변경(false);
        return () => { clearTimeout(타이머) } // 이렇게 해야 버그를 방지할 수 있다. 
      }, 2000);
      // return function detail_end(){ // detail페이지가 사라질 때 실행되는 코드

      // };
    }, {alert}); // alert가 변경될 때만 실행해라는 뜻, 다른 요소도 다 넣을 수 있다.(array로) 빈 어레이가 들어가면 더이상 실행이 안된다. (맞는 조건이 없기 떄문이다.)



    let { id } = useParams();
    let history = useHistory();


    let find_items = props.shoes.find((items)=>{
        return items.id == id
    });

    return(
      <div className="container">
          <박스>
            <제목 className='red'>상세페이지</제목>
          </박스>

          { inputData }
          <input onChange={(e) => {input변경(e.target.value) }} /> 

          {
            alert === true 
            ? <div className='my-alert'>
              <p>재고가 얼마 남지 않았습니다.</p>
              </div>
            : null
          }

          
          
           <div className="row">
            <div className="col-md-6">
              <img src={"https://codingapple1.github.io/shop/shoes" + (find_items.id + 1) + ".jpg"} width="100%" />
            </div>
            <div className="col-md-6 mt-4">
              <h4 className="pt-5">{find_items.title}</h4>
              <p>{find_items.content}</p>
              <p>{find_items.price}</p>
              <button className="btn btn-danger">주문하기</button> 
              <button className="btn btn-danger" onClick={() => {
                history.goBack();
                // history.push('/') 이런식으로 경로를 바로 입력해주는 방법도 있다.
              }}>뒤로가기</button> 
            </div>
          </div>
        </div> 
    )
  }




  // 구) 코드 Lifecycle Hook

  // class Detail2 extends React.Component{
  //   componentDidMount(){ // Detail2 컴포넌트가 Mound(등장)되었을 때 실행할 코드
  //                         // Ajax코드도 사용 가능함.
  //   }

  //   componentWillUnmount(){ // Detail2가 unmount(사라질) 될 때 실행할 코드

  //   }
  // }

   export default Detail;