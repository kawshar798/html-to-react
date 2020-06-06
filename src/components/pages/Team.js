import React, { Component } from 'react'
import img1 from '../../assets/img/team/1.jpg';
import img2 from '../../assets/img/team/2.jpg';
import img3 from '../../assets/img/team/3.jpg';
import Teammember from './Teammember';
const teams = [
    {
        name:'Kay Garland',
        image:img1,
        designation:'Lead Designer'
    },
    {
        name:'Larry Parker  ',
        image:img2,
        designation:'Lead Marketer'
    },
    {
        name:'Diana Petersen',
        image:img3,
        designation:'Lead Developer'
    }

]
 class Team extends Component {
    render() {
        return (
            <section class="page-section bg-light" id="team">
            <div class="container">
                <div class="text-center">
                    <h2 class="section-heading text-uppercase">Our Amazing Team</h2>
                    <h3 class="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <div class="row">
                    { teams.map((item,index)=>
                        <Teammember key={index}  name={item.name} image={item.image} designation={item.designation} />
                    )
                    }

                </div>
                <div class="row">
                    <div class="col-lg-8 mx-auto text-center"><p class="large text-muted">Lorem ipsum dolor sit amet, consectetur adipisicing elit. Aut eaque, laboriosam veritatis, quos non quis ad perspiciatis, totam corporis ea, alias ut unde.</p></div>
                </div>
            </div>
        </section>
        )
    }
}
export default Team;
