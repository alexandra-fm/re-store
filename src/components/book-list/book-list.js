import React, { Component } from "react"

import BookListItem from "../book-list-item/book-list-item.js"

import "./book-list.css"

export default class BookList extends Component {
  render() {
    const { books } = this.props
    return (
      <ul>
        {books.map(book => {
          return (
            <li key={book.id}>
              <BookListItem book={book} />
            </li>
          )
        })}
      </ul>
    )
  }
}
