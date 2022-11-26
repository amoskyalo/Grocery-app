import React, { useEffect, useState } from 'react'
import './SingleProduct.css'
import { AiFillTwitterCircle, AiTwotoneStar } from 'react-icons/ai'
import { useParams } from 'react-router-dom'
import axios from 'axios'
import { useCart } from 'react-use-cart'

const SingleProduct = () => {
    const [singleFruit, setSingleFruit] = useState([]);
    const { id } = useParams();
    useEffect(()=>{
        const getProducts = async () => {
                try {
                    const res = await axios.get(`https://groceryamoh.herokuapp.com/api/product/${id}`);
                    const likes = Math.floor(Math.random() * 100);
                    const discount = Math.floor(Math.random() * (res.data.price / 2));
                    const percentageDiscount = Math.floor((discount/ res.data.price) * 100);
                    const initialPrice = res.data.price + discount;
                    setSingleFruit({...res.data, likes, percentageDiscount, initialPrice, id});
                } catch (error) {
                console.log(error); 
                }
            };
            getProducts();
        },[id]);

        const { addItem } = useCart();
  return (
        <div className='single'>
            <div className="single-image">
                <img src={singleFruit.image?.url} alt="" />
                <div className="share">
                    <h2>Share this product</h2>
                    <AiFillTwitterCircle className='share-icon'/>
                </div>
            </div>
            <div className="descriptions">
                <h2>{singleFruit.title}</h2>
                <p className="desc-ratings">
                    <AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar />
                    ({singleFruit.likes} verified ratings)
                </p>
                <p className="delivery">Free delivery in Nairobi and its sorroundings</p>
                <p className="single-price">Ksh.{singleFruit.price}</p>
                <div className="save">
                    <p>Ksh.{singleFruit.initialPrice}</p>
                    <span>- {singleFruit.percentageDiscount} %</span>
                </div>
                <button className='cart-button' onClick={() => addItem(singleFruit)}>ADD TO CART</button>  
                <div className="single-info">
                    <h3>Description</h3>
                    <p>{singleFruit.description}</p>  
                </div>  
            </div>
        </div>
  )
}

export default SingleProduct