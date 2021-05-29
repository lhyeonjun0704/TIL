import React from 'react';
import {Table} from 'react-bootstrap';
import { connect } from 'react-redux';

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
                                    props.dispatch({ type: '수량증가'
                                // payload: { name: 'kim' }
                                }) 
                                //payload로 데이터도 전송 가능 액션으로 저장된다.
                                }}> + </button>
                                <button onClick={() => {
                                    props.dispatch({ type: '수량감소'})
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
