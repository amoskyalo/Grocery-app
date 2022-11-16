import axios from 'axios';
import { useEffect, useState } from 'react'
import { HiStar } from "react-icons/hi"

const Special = () => {
    const [specials, setSpecial] = useState([]);

    const getSpecials = async() =>{
       try {
        const req = await axios.get("https://perezfoods.herokuapp.com/api/v1/products/all");
        const mappedSpecial = req.data.items;
        const allMapped = mappedSpecial.map((spec) => {
            const like = Math.floor(Math.random() * 100)
            return {...spec, like}
       });
       setSpecial(allMapped);
       } catch (error) {
        console.log(error);
       }
    };

    useEffect(() =>{
        getSpecials()
    }, []);

  return (
    specials.map((special, i) =>( 
        <div className="special" key={i}>
            <div className="special-img">
                <img src={special.image.url} alt="" />
            </div>
            <div className="special-desc">
                <h3 className="special-name">{special.title}</h3>
                <p className="special-stars"><HiStar /><HiStar /><HiStar /><HiStar /><HiStar /> ({special.like})</p>
                <p className="special-price">Kshs.{special.price}</p>
            </div>
        </div>
    ))
  )
}

export default Special