import React from "react"
import { Link } from "react-router-dom"

import "./book-list-item.css"

const BookListItem = ({ book, onAddedToCart }) => {
  const { title, author, price, coverImage } = book
  return (
    <>
      <div className="book-list-item">
        <div className="book-cover">
          <Link to="/">
            <img src={coverImage} alt="cover" />
          </Link>
        </div>
        <div className="book-details">
          <Link to="/" className="book-title">
            {title}
          </Link>
          <div className="book-author">{author}</div>
          <div className="book-price">${price}</div>
          <button
            className="btn btn-outline-secondary add-to-cart"
            onClick={onAddedToCart}
          >
            Add to cart
          </button>
        </div>
      </div>
    </>
  )
}

export default BookListItem
