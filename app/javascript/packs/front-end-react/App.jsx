import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo"
import { client } from "./apollo"
import Book from './src/bookComponent';

class App extends Component {
  render() { 
    return ( 
      <ApolloProvider client={client}>
        <div>
          <header>
            <h1>Books</h1>
          </header>
          <Book />
        </div>
      </ApolloProvider>
     );
  }
}



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})
