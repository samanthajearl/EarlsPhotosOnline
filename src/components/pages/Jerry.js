import React, { PureComponent} from 'react';
import NavBar from '../global/NavBar';
export default class Jerry extends PureComponent{
    render(){
        return(
            <div>
                <NavBar />
                <div class='nav-bar-padding'>
                    <h1>Jerry</h1>
                </div>
            </div>
        ) 
    }
}