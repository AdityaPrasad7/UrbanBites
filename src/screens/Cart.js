import React from 'react';
import { useCart, useDispatchCart } from '../components/ContextReducer';
import { FontAwesomeIcon } from '@fortawesome/react-fontawesome';
import { faTrash } from '@fortawesome/free-solid-svg-icons';

export default function Cart() {
  let data = useCart();
  let dispatch = useDispatchCart();

  if (data.length === 0) {
    return (
      <div>
        <div className='m-4 w-100 align-items-center fs-3' style={{color:"#2B7A0B"}}>Please add some items!☺️</div>
      </div>
    );
  }

  //const handleCheckOut = async () => {
    //      console.log(index)
    //      dispatch({type:"REMOVE",index:index})
    //    }

       const handleCheckOut = async () => {
         let userEmail = localStorage.getItem("userEmail");
    //      console.log(data,localStorage.getItem("userEmail"),new Date())
         let response = await fetch("http://localhost:5000/api/orderData", {
    //        credentials: 'include',
    //        Origin:"http://localhost:3000/login",
            method: 'POST',
            headers: {
              'Content-Type': 'application/json'
            },
            body: JSON.stringify({
              order_data: data,
              email: userEmail,
             order_date: new Date().toDateString()
            })
         });
         console.log("Order Response:", response.status)
         if (response.status === 200) {
            dispatch({ type: "DROP" })
    }
   };

  let totalPrice = data.reduce((total, food) => total + food.price, 0);

  return (
    <div className='container'> 
      <div className='table-responsive'>
        <table className='table table-hover'>
          <thead className='fs-5'>
            <tr>
              
              <th scope='col'>items</th>
              <th scope='col'>qty.</th>
              <th scope='col'>size</th>
              <th scope='col'>price</th>
              <th scope='col'></th>
            </tr>
          </thead>
          <tbody>
            {data.map((food, index) => (
              <tr key={index}>
                
                <td>{food.name}</td>
                <td>{food.qty}</td>
                <td>{food.size}</td>
                <td>{food.price}/-</td>
                <td>
                  <button
                    type='button'
                    className='btn p-0'
                    onClick={() => {
                      dispatch({ type: 'REMOVE', index: index });
                    }}
                  >
                    <FontAwesomeIcon icon={faTrash} />
                  </button>
                </td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>
      <div className='d-flex justify-content-between align-items-center'>
      <div>
        <h1 className='fs-5 mb-3 mx-2'style={{fontWeight:'bold'}}>Total Price: {totalPrice}/-</h1>
      </div>
      <div >
        <button className='btn mb-3 me-2' onClick={handleCheckOut} style={{backgroundColor:"#2B7A0B", color:"#ECECEC"}}>
          Check Out
        </button>
      </div>
      </div>
    </div>
  );
}