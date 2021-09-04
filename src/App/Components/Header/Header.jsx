import React, { Component } from 'react';
import { AboutButton } from './Buttons/AboutButton/AboutButton';
import { ChangeModeButton } from './Buttons/ChangeModeButton/ChangeModeButton';
import { RefreshButton } from './Buttons/RefreshButton/RefreshButton';
import {Logo} from './Logo/Logo'

import './Header.css'

export class Header extends Component{

    render(){
     return (
        <div className='container-fluid navbar header'>
         <div className='container wrap justify-content-space-around '>
            <div>
                <Logo />
            </div>

            <div className='d-flex justify-content-space-around btns'>
             <AboutButton />
             <RefreshButton />
             <ChangeModeButton />
            </div>
         </div>
        </div>
        )
    }
}