
import React, { useState, useContext, useEffect } from "react"

import axios from "axios"
import { useSelector, useDispatch } from 'react-redux'
export default () => {

 const [like, setlike] = useState([]);
 const token = useSelector((state) => state.token.token);

 const normal = function () {
  const aa = [];
  axios.get('http://192.168.0.19:3000/like', {
   headers: {
    'Authorization': `Bearer ${token}`
   }
  })
   //성공시 then 실행
   .then(function (response) {
    console.log(response.data);
    response.data.map((el, index) => {
     el.size.map((ev, ii) => {
      var gt = el;
      gt.size = ev;
      aa.push(gt);

     })
    })
    console.log(aa)
    setlike(aa);


   }).catch(function (error) {

    console.log(error);
   });


 }


 useEffect(() => {
  normal();
 }, [])


 return [normal, like]
}
