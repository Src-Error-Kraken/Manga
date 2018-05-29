import React, { Component } from 'react';
import './App.css';
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
          // <Route exact path='/' component={Home} />
        </Switch>

      </div>
    );
  }
}

export default App;
