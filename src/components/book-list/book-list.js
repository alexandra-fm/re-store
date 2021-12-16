import React, { Component } from "react"
import { connect } from "react-redux"

import { withBookstoreService } from "../hoc"
import BookListItem from "../book-list-item/book-list-item.js"
import { fetchBooks, bookAddedToCart } from "../../actions"
import { compose } from "../../utils"
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator/"

import "./book-list.css"

const BookList = ({ books, onAddedToCart }) => {
  return (
    <ul className="book-list">
      {books.map(book => {
        return (
          <li key={book.id} className="book-list-item-container">
            <BookListItem
              book={book}
              onAddedToCart={() => onAddedToCart(book.id)}
            />
          </li>
        )
      })}
    </ul>
  )
}
class BookListContainer extends Component {
  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const { books, loading, error, onAddedToCart } = this.props
    if (error) return <ErrorIndicator />
    if (loading) return <Spinner />
    return <BookList books={books} onAddedToCart={onAddedToCart} />
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
    onAddedToCart: id => dispatch(bookAddedToCart(id)),
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookListContainer)
