import React, { Component } from 'react'
import Header from '../common/Header';
import {image} from '../../assets/img/header-bg.jpg';

class Home extends Component {
    render() {
        return (
          
        <Header 
        title="Welcome to Our Studio" 
        subtitle="Welcome to Our Studio" 
        buttonText="Tell me more k" 
        link="/services" 
        image={image}
        showButton={true}
        />
        )
    }
}
export default  Home;
