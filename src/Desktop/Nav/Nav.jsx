import { useState } from 'react'
import './Nav.css'
import { MdOutlineAccountCircle, MdOutlineShoppingCart, MdOutlineSearch } from 'react-icons/md'
import groceryLogo from '../../Assets/grocery-logo.png'
import { Link } from 'react-router-dom'
import { useCart } from 'react-use-cart'

const Nav = () => {
  const [sticky, setSticky] = useState("");

  window.addEventListener('scroll', () => {
		if (window.pageYOffset > 80) {
			setSticky("sticky");
		} else setSticky("");
	});

  const{ items } = useCart();

  return (
    <nav className="nav">
        <div className={`nav-bar ${sticky === "sticky" ? `sticky` : ""}`}>
            <div className="nav-logo">
                <img src={groceryLogo} alt="" />
            </div>
            <ul className="nav-links">
              <li className='nav-link'>
                <Link to="/">Home</Link>
              </li>
              <li className='nav-link'>
                <Link to="/shop-products">Shop</Link>
              </li>
              <li className='nav-link'>
                <Link to="/contacts">ContactUs</Link>
              </li>
            </ul>
            <div className="accounts">
              <div className="account">
                <MdOutlineAccountCircle />
              </div>
              <Link className="cart" to="/cart">
                <div className="cart-logo">
                  <MdOutlineShoppingCart />
                </div>
                <div className="cart-num">
                  <p>{items.length}</p>
                </div>
              </Link>
            </div>
        </div>

        <div className="sub-nav-bar">
          <div className="categories">
            <select className="selection" id="" name='select'>
              <option value="All">All Categoris</option>
              <option value="fruits">Fruits</option>
              <option value="vegetables">Cucuber</option>
              <option value="All">Coco Cookies</option>
            </select>
          </div>
          <div className="search">
            <input className="search-input" type="text" placeholder='Search'/>
            <MdOutlineSearch className='search-icon'/>
          </div>
        </div>
    </nav>
  )
}

export default Nav