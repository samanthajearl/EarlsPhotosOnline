import React, { PureComponent} from 'react';
import NavBar from '../global/NavBar';
export default class AboutUs extends PureComponent{
    render(){
        return(
            <div>
                <NavBar />
                <div class='nav-bar-padding'>
                    <h1>About Us</h1>
                </div>
            </div>
        ) 
    }
}