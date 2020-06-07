import React, { Component } from 'react'

 class TimeLine extends Component {
  
    state={
        customClass:false
    }
   
  
    render() {
        const  index = this.props.index;
        if(index%2==0){
              this.state.customClass =true;
          
        }
       
        return (
            <>
            <li className={this.state.customClass?'':'timeline-inverted' } >
            <div className="timeline-image">
                <img className="rounded-circle img-fluid" src={this.props.image} alt="" />
                </div>
            <div className="timeline-panel">
                <div className="timeline-heading">
        <h4>{this.props.year}</h4>
                    <h4 className="subheading">{this.props.heading}</h4>
                </div>
                <div className="timeline-body">
                    <p className="text-muted">{this.props.description}</p></div>
            </div>
        </li>
        </>
        )
    }
}
export default TimeLine;
