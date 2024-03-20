import React, { useEffect, useRef, useState } from 'react'
import { useDispatchCart, useCart } from './ContextReducer';
export default function Card(props) {
    let dispatch = useDispatchCart();
    let data = useCart();
    const priceRef = useRef();
    let options = props.options;
    let priceOptions = Object.keys(options);
    const [qty, setQty] = useState(1)
    const [size, setSize] = useState("")
    const handleAddtoCart = async () => {

        let food = []
        for (const item of data){
            if(item.id === props.foodItem._id){
                food = item;
                break;
            }
        }
        if (food != []) {
            if (food.size === size) {
              await dispatch({ type: "UPDATE", id: props.foodItem._id, price: finalPrice, qty: qty })
              return
            }
            else if (food.size !== size) {
              await dispatch({ type: "ADD", id: props.foodItem._id, name: props.foodItem.name, price: finalPrice, qty: qty, size: size,img: props.ImgSrc })
              console.log("Size different so simply ADD one more to the list")
              return
            }
            return
          }
        await dispatch({
            type: "ADD",
            id: props.foodItem._id,
            name: props.foodItem.name,
            price: finalPrice,
            qty: qty, 
            size: size})

        //console.log(data)
    }
    let finalPrice = qty * parseInt(options[size]);
    useEffect(()=>{
        setSize(priceRef.current.value)

    },[])
    return (
        <div>
            <div>

                <div className=" card mt-3 mb-3  text-dark" style={{ width: "14.5rem", maxHeight: "320px", backgroundColor:"#ffffff" }}>
                    <img src={props.foodItem.img} className="Card-image-top rounded-top" alt="..." style={{ height: "135px", objectFit: "fill" }} />
                    <div className="card-body rounded-bottom">
                        <h6 className="card-title">{props.foodItem.name}</h6>

                        <select className='m-2 h=100 mb-4 text-dark rounded' onChange={(e) => setQty(e.target.value)}>
                            {Array.from(Array(6), (e, i) => {
                                return (
                                    <option key={i + 1} value={i + 1}> {i + 1} </option>
                                )
                            })}
                        </select>
                        <select className='m-2 h=100 mb-4 text-dark rounded' ref={priceRef} onChange={(e) => setSize(e.target.value)}>
                            {priceOptions.map((data) => {
                                return <option key={data} value={data}>{data}</option>
                            })}
                        </select>
                        <div className='d-inline h-100 mb-4 fs-6'>₹{finalPrice}/-</div>
                    </div>
                    <button className={'btn justify-center text-white rounded-0 rounded-bottom'} onClick={handleAddtoCart}
                        style={{ color: "#ECECEC", position: 'absolute', bottom: 0, left: 0, right: 0, backgroundColor: "#b3aa04", padding: "1px 2px", borderRadius: '0 0 15px 15px' }}>Add to Cart</button>
                </div>
            </div>
        </div>
    )
}

