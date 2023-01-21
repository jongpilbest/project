import { createSlice } from "@reduxjs/toolkit";

const initialstate = {
 token: '',
 cart: [],
 name: '',
 like: [],
 cart_price: 0

}
const tokenslice = createSlice({

 name: 'token',
 initialState: initialstate,
 reducers: {
  settoken: (state, action) => {
   state.token = action.payload
  },
  setuser: (state, action) => {

   state.cart = action.payload;
   //state.name = action.payload.name;

  },
  deleteuser: (state, action) => {
   console.log(action.payload.id, action.payload.size);
   const findIndexArray = state.cart.reduce((arr, item, index) => {
    // 배열의 요소가 특정 조건을 만족하면 누적 값(arr)에 인덱스를 추가합니다.
    if (item.productId.productId._id == action.payload.id) {
     arr.push(index);
    }
    return arr;
   }, []);
   console.log(findIndexArray)
   var find_index = 0;

   findIndexArray.map((el, index) => {
    if (state.cart[el].size.size == action.payload.size) {
     find_index = el;
     return;
    }
   })

   state.cart = state.cart.filter((el, index) => {
    return index != find_index
   })


  },
  setname: (state, action) => {
   state.name = action.payload
  },
  setlike: (state, action) => {
   state.like = action.payload
  },
  setprice: (state, action) => {

   state.cart_price = action.payload

  },
  setminusprice: (state, action) => {
   console.log(action.payload, 'redux마이너스', typeof (action.payload))
   state.cart_price = state.cart_price - action.payload;
  }
 }

})


export const tokenAction = tokenslice.actions;

export default tokenslice.reducer;