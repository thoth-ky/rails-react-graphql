import React, { Component } from 'react';
import { Mutation } from "react-apollo";
import { CREATE_BOOK } from "../apollo"


class Book extends Component {
  constructor(props) {
    super(props);
    this.state = { 
      title: null,
      author: null,
      review: null,
      reviewer: null,
      errors: []
    }
  }

  handleFormSubmit = ( props ) => {
    let { createBook } = props;
    let {
      title,
      author,
      review,
      reviewer
    } = this.state;

    console.log(title, author, review, reviewer)
    createBook({
      variables: {
        title: title,
        author: author,
        review: review,
        reviewer: reviewer
      }
    })
    .then((response) =>{
      alert('Book Details Updated successfully')
      const { data } = response;
      console.log(data)
    })
    .catch((e) => {
      let messages = JSON.parse(e.graphQLErrors[0].message)
      this.setState({
        errors : messages.errors
      })

    })

  }

  handleChange = (event) =>{
    this.setState({
      [event.target.id]: event.target.value
    })

  }

  showErrors = () =>{
    let { errors } = this.state;
    const errorsList = errors.map((error, index)=>(
      <li key={index}>{error}</li>
    ))

    return (
      <ul>
        {errorsList}
      </ul>
    )
  }
  render() { 
    return (
      <Mutation
        mutation={CREATE_BOOK}
      >
      {(createBook) =>(
        <div>
          <h2>Create Book Form</h2>
          <this.showErrors/>
          <form onSubmit={ e =>{
            e.preventDefault()
            this.handleFormSubmit({ createBook })
          }}>
            <div>
              <label>Title</label>
              <input type="text" id="title" onChange={this.handleChange} required/>
            </div>

            <div>
              <label>Author</label>
              <input type="text" id="author" onChange={this.handleChange} required/>
            </div>

            <div>
              <label>Reviewer</label>
              <input type="text" id="reviewer" onChange={this.handleChange} required/>
            </div>

            <div>
              <label>Review</label>
              <textarea rows="10" cols="60" id="review" onChange={this.handleChange} required/>
            </div>
            <button type="submit">SUBMIT</button>
          </form>
        </div>
      )}
      </Mutation>
    );
  }
}
 
export default Book;