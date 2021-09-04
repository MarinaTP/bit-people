import React, { Component } from 'react';

import refresh from '../../../../../Shared/refresh.png'
import './RefreshButton.css'





export class RefreshButton extends Component{

    render(){
        return (
       
         <button className='rfrBtn'><img src={refresh}></img></button>
        )
    }
}