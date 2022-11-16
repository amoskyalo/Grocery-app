import shopLogo from '../../Assets/shop.png'
import './Shop.css'
import Vegetables from "./Vegetables"
import Fruits from './Fruits'

const Shop = () => {
  return (
    <div className="shop">
        <div className="title">
            <img src={shopLogo} alt="" />
            <h2>Shop Your Daily Necessary</h2>
        </div>
        <div className="categorys">
            <div className="vegetables category">
                <h2>Vegetables</h2>
                <div className="category-items">
                    <Vegetables />
                </div>
            </div>
            <div className="fruits category">
                <h2>Fruits</h2>
                <div className="category-items">
                    <Fruits />
                </div>
            </div>
        </div>
    </div>
  )
}

export default Shop