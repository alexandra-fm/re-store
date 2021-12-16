import React from "react"
import { connect } from "react-redux"

import {
  bookAddedToCart,
  bookRemovedFromCart,
  allBooksRemovedFromCart,
} from "../../actions/"

import "./shopping-cart-table.css"

const ShoppingCartTable = ({
  items,
  total,
  onIncrease,
  onDecrease,
  onDelete,
}) => {
  const renderRow = (item, idx) => {
    const { id, title, count, total } = item
    return (
      <tr key={id}>
        <td>{idx + 1}</td>
        <td>{title}</td>
        <td>{count}</td>
        <td>${total}</td>
        <td>
          <button
            className="btn btn-outline-secondary btn-sm float-end"
            onClick={() => onDelete(id)}
          >
            <i className="bi bi-x-lg" />
          </button>
          <button
            className="btn btn-outline-secondary btn-sm float-end"
            onClick={() => onDecrease(id)}
          >
            <i className="bi bi-dash-lg" />
          </button>
          <button
            className="btn btn-outline-secondary btn-sm float-end"
            onClick={() => onIncrease(id)}
          >
            <i className="bi bi-plus-lg" />
          </button>
        </td>
      </tr>
    )
  }

  return (
    <div className="shopping-cart-table">
      <h2>Your Order</h2>

      <table className="table">
        <thead>
          <tr>
            <th>#</th>
            <th>Item</th>
            <th>Count</th>
            <th>Price</th>
            <th>Action</th>
          </tr>
        </thead>

        <tbody>{items.map(renderRow)}</tbody>
      </table>

      <div className="total">Total: ${total}</div>
    </div>
  )
}

const mapStateToProps = ({ cartItems, oredrTotal }) => {
  return {
    items: cartItems,
    total: oredrTotal,
  }
}

const mapDispatchToProps = {
  onIncrease: bookAddedToCart,
  onDecrease: bookRemovedFromCart,
  onDelete: allBooksRemovedFromCart,
}

export default connect(mapStateToProps, mapDispatchToProps)(ShoppingCartTable)
