import React, { Component } from 'react';

export class SingleUser extends Component{
    constructor(props){
        super(props);
    }

    render(){
        return(

            <div className= "container d-flex">
                <div><img src = {this.props.user.picture.thumbnail}></img></div>
                <div>
                    <p>{this.props.user.name?.first} {this.props.user.name.last}</p>
                    <p>Email: {this.props.user?.email}</p>
                    <p>{this.props.user.dob?.date}</p>
                </div>
            </div>
        )
    }
}