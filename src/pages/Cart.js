import Table from 'react-bootstrap/Table';
import Button from 'react-bootstrap/Button';
import { useState } from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { changeName, increase } from '../store/userSlice';
import { addCount, subItem } from '../store';

function Cart() {

    let mydata = useSelector((state)=>{return state;});
    let dispatch = useDispatch();

    console.log(mydata);

    return (
        <div>
            <h3>{mydata.user.name} {mydata.user.age}의 장바구니</h3>
            <button onClick={()=>{
                dispatch(increase(100))
            }}>나이증가</button>
            <Table striped bordered hover>
            <thead>
                <tr>
                    <th>#</th>
                    <th>상품명</th>
                    <th>수량</th>
                    <th>변경하기</th>
                    <th>삭제하기</th>
                </tr>
            </thead>
            <tbody>
                {
                    mydata.cart.map((a, i)=>{
                    return(
                        <tr key={i}>
                            <td>{mydata.cart[i].id}</td>
                            <td>{mydata.cart[i].name}</td>
                            <td>{mydata.cart[i].count}</td>
                            <td>
                                <Button onClick={()=>{
                                    dispatch(addCount(mydata.cart[i].id));
                                }} variant="primary">+</Button>
                            </td>
                            <td>
                                <Button onClick={()=>{
                                    dispatch(subItem(i));
                                }} variant="danger">x</Button>
                            </td>
                        </tr>
                    )  
                    })
                }
            </tbody>
            </Table>
        </div>
    );
}

export default Cart;


