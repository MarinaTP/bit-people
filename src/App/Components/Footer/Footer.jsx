import React,{Component} from 'react';
import './Footer.css';

export class Footer extends Component{
    render(){
        return (
            <div className='d-flex justify-content-between footer container-fluid'>
                <p>© 2021 Copyright BIT</p>
                <div>Last update</div>
            </div>
        )
    }
}
