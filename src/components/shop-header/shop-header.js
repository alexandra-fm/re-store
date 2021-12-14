import React from "react"
import { Link } from "react-router-dom"

import "./shop-header.css"

const ShopHeader = ({ numItems, total }) => {
  return (
    <header className="shop-header ">
      <Link className="logo text-dark" to="/">
        ReStore
      </Link>
      <Link to="/cart" className="shopping-cart">
        {numItems} items (${total})<i className="cart-icon bi bi-bag-check"></i>
      </Link>
    </header>
  )
}
/* 
<NavLink to="/">HomePage</NavLink>
        <div> </div>
        <NavLink to="/cart">CartPage</NavLink> */

export default ShopHeader
