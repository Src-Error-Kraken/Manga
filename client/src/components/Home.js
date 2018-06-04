import React from "react";
import './Anime.css';
import './Home.css';
import Header from './Header';



function Mangas(props) {
 return(
  <div>
    <Header/>

     <div className="home_header">
                <div className="header-img">
                </div>
                <div className="header-title">
                    <h1 className="title-main"> Besuto Manga </h1>
                    <p className="title-content">
                        Your daily dose of Manga
                    </p>
                </div>
     <div>

       <div className="mangaList_container">
            {animeList.map((manga, index) => (
                <div className="manga_list" key={index}>
                    <Anime name={manga} />
                </div>
            ))}
            </div>
  </div>
 )

}

export default Mangas;
