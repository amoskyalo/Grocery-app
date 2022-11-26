import React, { useEffect, useState } from 'react'
import axios from 'axios'
import { HiStar } from 'react-icons/hi'
import { Link } from 'react-router-dom';

const Product = () => {
    const [products, setProducts] = useState([]);

    const getProducts = async()=>{
        try {
            const req = await axios.get("https://perezfoods.herokuapp.com/api/v1/products/all");
            const reqProducts = req.data.items;
            const allProducts = reqProducts.map((oneProduct) =>{
                const likes = Math.floor(Math.random() * 100);
                return {...oneProduct, likes}
            });
            setProducts(allProducts);
        } catch (error) {
            console.log(error);
        }
    };
    console.log(products);
    
    useEffect(()=>{
        getProducts();
    }, []);
    
  return (
    products.map((product, i) =>(
        <Link to={`/shop/product/${product._id}`} className="product" key={i}>
            <div className="image">
                <img src={product.image.url} alt="product" />
            </div>
            <div className="description" style={{marginTop: "0.5rem"}}>
                <h3 className="product-name" style={{textTransform: "capitalize"}}>{product.title}</h3>
                <p className="ratings"><HiStar /><HiStar /><HiStar /><HiStar /><HiStar />({product.likes})</p>
                <p className="price" style={{margin: "0.3rem 0"}}>Kshs.{product.price}</p>
            </div>
            <div className="carts">
                <button className="carts-btn">Add to Cart</button>
            </div>
        </Link>
    ))
  )
}

export default Product