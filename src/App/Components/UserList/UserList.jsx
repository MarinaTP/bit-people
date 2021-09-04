import React, { Component } from 'react';
import { getUsers } from '../../../Services/GetUsers';
import { SingleUser } from '../SingleUser/SingleUser';
import './UserList.css';

export class UserList extends Component{
    constructor(props){
        super(props);
        this.state = {
            users: [],
        }
    }

    componentDidMount(){
        getUsers()
        .then((res) => {this.setState({users:res.results})})
    }
    render(){
        return(
            this.state.users.map((user, index) => {
              return(
                <div className = "userList">
                    <SingleUser user = {user} key = {user.id}/>
                </div>
            )})
            
        )
    }
}