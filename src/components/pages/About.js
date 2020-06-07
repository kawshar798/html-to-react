import React, { Component } from 'react'
import Header from '../common/Header';
import {image} from '../../assets/img/header-bg.jpg';
import TimeLine from './TimeLine';
import img1 from '../../assets/img/about/1.jpg';
import img2 from '../../assets/img/about/2.jpg';
import img3 from '../../assets/img/about/3.jpg';
import img4 from '../../assets/img/about/4.jpg';
const timelines = [
    {
        year:'2009-2011',
        heading:'Our Humble Beginnings',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
        image:img1

    },
    {
        year:'March 2011',
        heading:'An Agency is Born',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
        image:img2

    },
    {
        year:'December 2012',
        heading:'Transition to Full Service',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
        image:img3

    },
    
    {
        year:'July 2014',
        heading:'Phase Two Expansion',
        description:'Lorem ipsum dolor sit amet, consectetur adipisicing elit. Sunt ut voluptatum eius sapiente, totam reiciendis temporibus qui quibusdam, recusandae sit vero unde, sed, incidunt et ea quo dolore laudantium consectetur!',
        image:img4

    },
    {
       
        image:'Be Part Of Our Story!',
       

    },
    
]
 class About extends Component {

   
    render() {
        return (
            <>
{/*            
              <Header 
        title="Welcome to Our Studio" 
        subtitle="Welcome to Our Studio" 
        buttonText="Tell me more k" 
        link="/services" 
        image={image}
        showButton={true}
        /> */}
            <section className="page-section" id="about">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">About</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <ul className="timeline">

                    { 
                         timelines.map((item,index)=>
                         <TimeLine year={item.year} key={index} index={index} heading={item.heading} image={item.image} description={item.description}  />
                         )   
                    }
                  

                </ul>
            </div>
        </section>
        </>
        )
    }
}
export default About;