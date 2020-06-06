import React, { Component } from 'react'

class Header extends Component {
    render() {
        return (
            <header className="masthead" style={{backgroundImage:this.props.image}}>
            <div className="container">
        <div className="masthead-subheading">{this.props.title}</div>
                <div className="masthead-heading text-uppercase">{this.props.subtitle}</div>
               
           {
               this.props.showButton &&
               <a className="btn btn-primary btn-xl text-uppercase js-scroll-trigger" href="{this.props.link}">{this.props.buttonText}</a>
           }
            </div>
          </header>
        )
    }
}
export default  Header;
