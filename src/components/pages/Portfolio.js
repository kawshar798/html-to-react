import React, { Component } from 'react'
import Header from '../common/Header';
import {image} from '../../assets/img/header-bg.jpg';
import SinglePortfolio from './SinglePortfolio';
import img1 from '../../assets/img/portfolio/01-thumbnail.jpg';
import img2 from '../../assets/img/portfolio/02-thumbnail.jpg';
import img3 from '../../assets/img/portfolio/03-thumbnail.jpg';
import img4 from '../../assets/img/portfolio/04-thumbnail.jpg';
import img5 from '../../assets/img/portfolio/05-thumbnail.jpg';
import img6 from '../../assets/img/portfolio/06-thumbnail.jpg';


const portfolioItems = [{
   
    heading:'Threads',
    subheading:'Illustration',
    img:img1
},
{
   
    heading:'Explore',
    subheading:'Graphic Design',
    img:img2
},
{
   
    heading:'Finish',
    subheading:'Branding',
    img:img3
},
{
   
    heading:'Finish',
    subheading:'Identity',
    img:img4
},
{
   
    heading:'Lines',
    subheading:'Branding',
    img:img5
},
{
   
    heading:'Window',
    subheading:'Photography',
    img:img6
},



]


 class Portfolio extends Component {
    render() {
        return (
            <div>
               
                 <section className="page-section bg-light" id="portfolio">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Portfolio</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div className="row">
                    {
                        portfolioItems.map( (item,index)=>
                            <SinglePortfolio  key={index} image={item.img}  heading={item.heading}  subheading={item.subheading}   />
                        )
                    }
                 
                </div>
            </div>
        </section>
            </div>
        )
    }
}
export default Portfolio;
