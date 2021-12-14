import React from "react"

import "./shopping-cart-table.css"

const ShoppingCartTable = () => {
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

        <tbody>
          <tr>
            <td>1</td>
            <td>Site Reliability Engineering</td>
            <td>2</td>
            <td>$40</td>
            <td>
              <button className="btn btn-outline-secondary btn-sm float-right">
                <i className="bi bi-plus-lg" />
              </button>
              <button className="btn btn-outline-secondary btn-sm float-right">
                <i className="bi bi-dash-lg" />
              </button>
              <button className="btn btn-outline-secondary btn-sm float-right">
                <i className="bi bi-x-lg" />
              </button>
            </td>
          </tr>
        </tbody>
      </table>

      <div className="total">Total: $201</div>
    </div>
  )
}

export default ShoppingCartTable
