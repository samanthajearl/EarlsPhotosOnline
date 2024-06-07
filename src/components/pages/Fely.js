import React, { PureComponent} from 'react';
import NavBar from '../global/NavBar';
import '../global/GlobalStylings.css';
export default class Fely extends PureComponent{
    render(){
        return(
            <div>
                <NavBar />
                <div class='nav-bar-padding'>
                    <h1>Fely</h1>
                </div>
            </div>
        ) 
    }
}