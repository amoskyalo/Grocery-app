import { useEffect, useState } from 'react'
import axios from 'axios';
import { AiTwotoneStar } from 'react-icons/ai'
import { Link } from 'react-router-dom';

const Vegetables = () => {
    const [vegetables, setVegetables] = useState([]);
    
    const getVegetables = async() =>{
        const req = await axios.get("https://groceryamoh.herokuapp.com/api/product/all?category=vegetables");
        const finalProducts = req.data.items.map(finalProduct =>{
            const likes = Math.floor((Math.random() * 100));
            return {...finalProduct, likes}
        });
        setVegetables(finalProducts);
    };

    useEffect(()=>{
        getVegetables();
    }, []);

  return (
        vegetables.map((vegetable, i) =>
            <Link to={`/shop-products/${vegetable._id}`} className="display" key={i}>
                <div className="display-image">
                    <img src={vegetable.image.url} alt="" />
                </div>
                <div className="display-desc">
                    <h3 className="display-title" style={{textTransform: "capitalize"}}>{vegetable.title}</h3>
                    <p className="display-stars"><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar /><AiTwotoneStar />({vegetable.likes})</p>
                    <p className="display-price">Kshs.{vegetable.price}</p>
                </div>
                <div className="carts">
                    <button className="carts-btn">Add to Cart</button>
                </div>
            </Link>
        )
  )
}

export default Vegetables