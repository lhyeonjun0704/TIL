import React, { useEffect, memo } from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';


// 함수나 오브젝트는 선언해서 쓰는게 좋다. 페잊가 랜더링 되거나 할 때 메모리할당이 되어야 나중에 
// 성능적인 면에서 더욱 좋다. ex) var style = {color : red} 등
// 애니메이션은 랜더링 시간이 느리기 때문에 transform을 통해서 하는 것이 좋다.

function Cart(props){
    return (
            <div>
            <Table responsive="sm">
                <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경</th>
                </tr>
                </thead>
                <tbody>
                {
                    props.state.map((a, i) =>{
                        return(
                            <tr key={i}>
                                <td>{ a.id }</td>
                                <td>{ a.name }</td>
                                <td>{ a.quan }</td>
                                <td><button onClick={() => {
                                    props.dispatch({ type: '수량증가', 데이터: a.id
                                // payload: { name: 'kim' }
                                }) 
                                //payload로 데이터도 전송 가능 액션으로 저장된다.
                                }}> + </button>
                                <button onClick={() => {
                                    props.dispatch({ type: '수량감소', 데이터: a.id})
                                }}> - </button>
                                </td>
                            </tr>
                    )
                 })  
                }
                
                </tbody>
            
            </Table>
            { 
                props.alertf === true
                ?   (<div className='my-alert2'>
                    <p>지금 구매하시면 신규할인 20%</p>
                    <button onClick={() => {
                        props.dispatch({type : 'alert닫기'})
                    }}>닫기</button>
                 </div>)
                : null
            }
            <Parent 이름='LHJ1' 나이='28' />  
        </div>
    )
}

//redux store로 데이터 가져와서 props로 변환해주는 함수
// combinereducers를 쓰게되면 변화된다.
function cart_table(state){
    return {
        state : state.reducer, // state안에 name이 있으면 주세요
        alertf : state.reducer2
    }
}

export default connect(cart_table)(Cart)

//export default Cart;


// 번외 2. 성능잡기 (쓸데 없는 재렌더링을 막는 MEMO)

// props나 state가 변경되면 그거 쓰는 HTML 전부 재렌더링 된다. 그래서 요즘 memo()를 사용한다.
// component의 크기가 클 때만 쓰는 것을 추천한다.
function Parent(props){
    return(
        <div>
            <Child1 이름={props.이름}></Child1>
            <Child2 나이={props.나이}></Child2>
        </div>
    )
}

function Child1(){
    useEffect(() => { console.log('렌더링됨1')});
    return <div>1111</div>
}

let Child2 = memo(function(){
    useEffect(() => { console.log('렌더링됨2') });
    return <div>22222</div>
})