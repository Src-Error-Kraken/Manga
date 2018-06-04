import React, { Component } from "react";
import Anime from "./Manga";
import Header from './Header';
import jwtDecode from 'jwt-decode';
import './Library.css';

class Collection extends Component{
   constructor(props){
       super(props)
       this.state = {
           id: "",
           name:"",
           mangaList: []
       }
       this.removeMangas = this.removeMangas.bind(this)

   }
    getUser() {
        let user = "";
        if (localStorage.getItem('authToken')) {
            user = jwtDecode(localStorage.getItem('authToken'));
            return user;
        }
    }

   fetchAnimes(){
       let user_id = this.getUser().id;
       fetch(`/mangas/${user_id}`)
           .then(resp => {
               if (!resp.ok) throw new Error(resp.statusMessage);
               return resp.json();
           })
           .then(data => this.setState({
               mangaList: data.data
           }))
   }

   removeMangas(id){
       const options = {
           method: "DELETE"
       }
       fetch(`/mangas/${id}`, options)
           .then(resp => {
               if (!resp.ok) throw new Error(resp.statusMessage);
               return resp.json();
           })
           .then(console.log('deleted'))

   }

   componentDidMount(){
       this.fetchMangas();
   }


   render(){
       return(
           <div className="Collection">
                <Header/>
                <h1 className="Collection_header">Library</h1>
                <div className="Collection_mangas">
                    {this.state.mangaList.map((manga, index) => (
                        <div key={index} className="Collection_list">
                            <Anime name={manga.manga_name} />
                        </div>
                    ))}
                </div>
           </div>
       )
   }
}

export default Collection;
