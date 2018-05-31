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
