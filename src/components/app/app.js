import React from "react"

import { Route, Routes, NavLink } from "react-router-dom"

import { HomePage, CartPage } from "../pages"

import "./app.css"

const App = () => {
  return (
    <>
      <NavLink to="/">HomePage</NavLink>
      <div> </div>
      <NavLink to="/cart">CartPage</NavLink>
      <hr />
      <Routes>
        <Route path="/">
          <Route index element={<HomePage />} />
          <Route path="cart" element={<CartPage />} />
          <Route path="*" element={<h2>Page not found</h2>} />
        </Route>
      </Routes>
    </>
  )
}

export default App
