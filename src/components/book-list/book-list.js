import React, { Component } from "react"
import { connect } from "react-redux"

import { withBookstoreService } from "../hoc"
import BookListItem from "../book-list-item/book-list-item.js"
import { fetchBooks } from "../../actions"
import { compose } from "../../utils"
import Spinner from "../spinner"
import ErrorIndicator from "../error-indicator/"

import "./book-list.css"

class BookList extends Component {
  componentDidMount() {
    this.props.fetchBooks()
  }

  render() {
    const { books, loading, error } = this.props
    if (error) return <ErrorIndicator />
    if (loading) return <Spinner />
    return (
      <>
        <ul className="book-list">
          {books.map(book => {
            return (
              <li key={book.id} className="book-list-item-container">
                <BookListItem book={book} />
              </li>
            )
          })}
        </ul>
      </>
    )
  }
}

const mapStateToProps = ({ books, loading, error }) => {
  return { books, loading, error }
}

const mapDispatchToProps = (dispatch, ownProps) => {
  const { bookstoreService } = ownProps
  return {
    fetchBooks: fetchBooks(bookstoreService, dispatch),
  }
}

export default compose(
  withBookstoreService(),
  connect(mapStateToProps, mapDispatchToProps)
)(BookList)
