import React, { Component } from 'react'



class Field extends Component {
    render() {
        return (
            <div className="form-group">
                { this.props.elementName === 'input'?   <input
             className="form-control" 
             id={this.props.name} 
             type={this.props.type} 
             placeholder={this.props.placeholder} 
             value={this.props.value}
             required="required" 
             onChange={e=>this.props.onChange}
             data-validation-required-message="Please enter your email address."
              />
              :  
                <textarea
              className="form-control" 
              id={this.props.name} 
             type={this.props.type} 
             placeholder={this.props.placeholder} 
              required="required"
              value={this.props.message}
              onChange={e=>this.props.onChange}
               data-validation-required-message="Please enter a message."></textarea>
                }
          
            <p className="help-block text-danger"></p>
        </div>
        )
    }
}
export default  Field;
