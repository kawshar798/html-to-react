import React, { Component } from 'react'
import Field from './Field'


const fileds ={
    sections:[
        [
        {name:'name',elementName:'input',type:'text',placeholder:'Your name'},
        {name:'email',elementName:'input',type:'text',placeholder:'Your email'},
        {name:'phone',elementName:'input',type:'text',placeholder:'Your Phone'},
    ],[
        {name:'message',elementName:'textarea',type:'text',placeholder:'Type your  Message'},
    ]
]
}

// [
//     {name:'name',elementName:'input',type:'text',placeholder:'Your name'},
//     {name:'email',elementName:'input',type:'text',placeholder:'Your email'},
//     {name:'phone',elementName:'input',type:'text',placeholder:'Your Phone'},
//     {name:'message',elementName:'textarea',type:'text',placeholder:'Type your  Message'}
   
// ]

class Contact extends Component {
    state = {
        name:'',
        email:'',
        phone:'',
        message:''
    }

    submitForm = (e) => {
        alert('Thona');
    }
    render() {
        return (
            <section className="page-section" id="contact">
            <div className="container">
                <div className="text-center">
                    <h2 className="section-heading text-uppercase">Contact Us</h2>
                    <h3 className="section-subheading text-muted">Lorem ipsum dolor sit amet consectetur.</h3>
                </div>
                <form  name="sentMessage" novalidate="novalidate">
                    <div className="row align-items-stretch mb-5">
                        {
                            fileds.sections.map((section,index)=>{
                                return(
                                    <div className="col-md-6" key={index}>
                                            {
                                            section.map((field,id) =>{
                                                    return <Field 
                                                    value={this.state[field.name]}
                                                    onChange={e=>this.setState({
                                                        [field.name]:e.target.value})
                                                    }
                                                    {...field} key={id}  />
                                            })
                                            
                                            }
                                    </div>
                                )
                            })
                        }
                       
                    </div>
                    <div className="text-center">
                        <div id="success"></div>
                        <button onClick={e=>this.submitForm} className="btn btn-primary btn-xl text-uppercase" id="sendMessageButton" type="submit">Send Message</button>
                    </div>
                </form>
            </div>
        </section>

        )
    }
}
export default  Contact;
