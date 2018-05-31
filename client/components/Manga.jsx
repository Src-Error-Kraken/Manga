import React, { Component } from 'react';
import './Manga.css';
import { Link } from 'react-router-dom';


class Manga extends Component{
    constructor(props){
        super(props)
        this.name = this.props.name;

       this.state = {
           a: "",
           i: "",
           im: "",
           posterImage: ""
       }
        this.link = '/manga_details/'
    }


  fetchManga() {
       fetch(

       )

       .then(resp => {
            if (!resp.ok) {
               throw Error ('oppsies: ' resp.message);
            }
            return resp.json();
            })
            .then(manga => {

                this.setState({

                })
            })
            .catch(err => console.log(`There\'s an error: ${err}`));
       }
       componentDidMount(){
          this.fetchManga()
       }

       render(){
          return(
            <div className="manga">
              <Link to={this.link + this.state.i}>
                  <img className="manga_img" src={this.state} />
              </Link>

              <p className="anime_title">{this.state}</p>
          )
       }

  }
