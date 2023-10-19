import { configureStore, createSlice } from "@reduxjs/toolkit";
import user from "./store/userSlice";
//슬라이스


let stock = createSlice({
    name : 'stock',
    initialState : [10, 11, 12],
    reducers : {
        changestock(){
        }
    }
}) // {stock : [10, 11, 12]}

let cart = createSlice({
    name : 'cart',
    initialState : [
        {id : 0,  name : 'white and Black', count : 1},
        {id : 1,  name : 'Grey Yordan', count : 1},
      ],
    reducers : {
        addCount(state, action){
            let index = state.findIndex((a)=>{return action.payload === a.id })
            state[index].count++;
        },
        addItem(state, action){
            state.push(action.payload)
        },
        subItem(state, action){
            //배열에서 특정 인덱스의 요소를 삭제
            console.log(state.length);
            console.log(action.payload);
            state.splice(action.payload, 1);
        }
    }
})

export let { addCount, addItem, subItem } = cart.actions

export default configureStore({
    reducer : {
        user : user.reducer,
        stock : stock.reducer,
        cart : cart.reducer
    }
})