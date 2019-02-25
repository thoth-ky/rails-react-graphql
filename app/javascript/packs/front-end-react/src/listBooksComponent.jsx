import React, { Component } from 'react';
import { Query } from "react-apollo";
import { GET_BOOKS } from "../apollo";
import Book from './bookComponent';

class AllBooks extends Component {
  constructor(props) {
    super(props);
    this.state = {  }
  }
  render() { 
    return (
        <Query query={GET_BOOKS}>
          {({ loading, error, data }) => {
            console.log(data)
            if (loading) return <p>Loading...</p>;
            if (error) return <p>Error :(</p>;
            return data.allBooks.map((book) =>(
              <div key={book.id}>
                <h2>{book.title}- {book.author}</h2>
                <h3>{book.reviewer}</h3>
                <p>{book.review}</p>
              </div>
            ))
          } }
          
        </Query>
     );
  }
}
 
export default AllBooks;