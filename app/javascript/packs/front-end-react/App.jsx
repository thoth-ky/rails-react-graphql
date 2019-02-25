import React, { Component } from 'react';
import ReactDOM from 'react-dom';
import { ApolloProvider } from "react-apollo"
import { client } from "./apollo"
import { Switch, Route } from 'react-router-dom';
import { BrowserRouter } from 'react-router-dom'
import Book from './src/bookComponent';
import NavBar from './src/navBar';
import AllBooks from './src/listBooksComponent';


class App extends Component {
  render() { 
    return (
      <BrowserRouter>
        <ApolloProvider client={client}>
          <div>
            <header>
              <NavBar/>
            </header>
            <Switch>
              <Route exact path="/" component={Book} />
              <Route exact path="/list" component={AllBooks} />
            </Switch>
          </div>
        </ApolloProvider>
      </BrowserRouter>
     );
  }
}



document.addEventListener('DOMContentLoaded', () => {
  ReactDOM.render(
    <App />,
    document.body.appendChild(document.createElement('div')),
  )
})

