import axios from 'axios';
import { useEffect, useState } from 'react'
import { AiTwotoneStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Fruits = () => {
    const [fruits, setFruits] = useState([]);

    const getFruits = async() =>{
        const req = await axios.get("https://groceryamoh.herokuapp.com/api/product/all?category=fruits");
        const finalProducts = req.data.products.map(finalProduct =>{
            const likes = Math.floor((Math.random() * 100));
            return {...finalProduct, likes}
        });
        setFruits(finalProducts);
    };

    useEffect(()=>{
        getFruits();
    }, []);


  return (
    fruits.map((fruit, i) =>
        <Link to={`/shop-products/${fruit._id}`}  className='display' key={i}>
            <div className="display-image">
                    <img src={fruit.image.url} alt="" />
            </div>
            <div className="display-desc">
                <h3 className="display-title" style={{textTransform: "capitalize"}}>{fruit.title}</h3>
                <p className="display-stars"><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar />0</p>
                <p className="display-price">Kshs.{fruit.price}</p>
            </div>
            <div className="carts">
                <button className="carts-btn">Add to Cart</button>
            </div>
        </Link>
    )
  )
}

export default Fruits