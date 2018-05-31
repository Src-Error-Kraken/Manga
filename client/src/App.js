import React, { Component } from 'react';
import './App.css';
import Home from '../components/Home';
import {Switch, Route, Redirect} from 'react-router-dom';

class App extends Component {
      constructor(props) {
        super(props)
      }

  addToCollection(manga) {
    const data = {
      manga_id: manga.id,
      manga_name: manga.name,
      user_id: manga.user_id
    }

    const mangaData = JSON.stringify(data);
    const options = {
      method: "POST",
      headers: {
        "Content-Type": "application/json"
      },
      body: mangaData
    }
    fetch('/mangas', options)
        .then(resp => {
          if (!resp.ok) throw new Error(resp.statusMessage);
          return resp.json();
        })
        .then(data => (data) ? console.log('added to collection') : console.log('Could not add to collection'))
  }
  render() {
    return (
      <div className="App">
        <Switch>
          <Route path='/manga_details/:id' component={(props)=>(MangaDetails
            id = {props.match.params.id} addToCollection = {this.addToCollection.bind(this)}/>)} />
          <Route path='/search/:manga' component={(props)=>(
            <SearchResults manga = {props.match.params.manga} />
          )} />
          <Route path='/register_login' component={RegisterLogin} />
          <Route path='/collection' component={Collection} />
          <Route exact path='/' component={Home} />
        </Switch>
          <Footer />
      </div>
    );
  }
}

export default App;
