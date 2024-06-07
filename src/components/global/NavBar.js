import React, { PureComponent} from 'react';
import { Outlet, Link } from "react-router-dom";
import './NavBar.css';
import './GlobalStylings.css';

export default class NavBar extends PureComponent{
    render(){
        return(
            <div class="nav_bar background-">
                <h1 className="title">Earl's Photos Online</h1>
                <nav class = "nav_container background-earthy-red"> 
                    <ul>
                        <li>
                            <Link to = "/" class="font-white font-bold background-slate">Home</Link>
                        </li>
                        <div class="float-right">
                            <li>
                                <Link to = "/fely" class="font-white font-bold">Fely's Photography</Link>

                            </li>
                            <li>
                                <Link to = "/jerry" class="font-white font-bold">Jerry's Photography</Link>

                            </li>
                            <li>
                                <Link to = "/about-us" class="font-white font-bold">About Us</Link>

                            </li>
                        </div>
                    </ul>
                </nav>
            </div>
        )
    }

}