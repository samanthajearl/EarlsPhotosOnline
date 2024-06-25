import React, { PureComponent } from 'react';
import NavBar from '../global/NavBar';
import './AboutUs.css';
import '../global/GlobalStylings.css';
export default class AboutUs extends PureComponent {
    render() {
        return (
            <div>
                <NavBar />
                <div class='w-100 mx-auto nav-bar-padding'>
                    <h1 class='about-us-title'>About Us</h1>
                </div>
                {/* ---------------Fely-------------- */}
                <div class='d-flex w-80 mx-auto justify-content-around'>
                    <div>
                        <img src="/photos/about-us/young-fely.jpg" alt="Young Fely" />
                    </div>
                    <div>
                        <p>Fely is the senior librarian at the Round Valley and Greer Libraries has been taking pictures for several years especially since she got her Nikon D-7200. She especially loves animals and sunsets.</p>
                    </div>
                </div>
                {/* ---------------Jerry-------------- */}
                <div class='d-flex w-80 mx-auto'>
                    <div>
                        <img src="/photos/about-us/young-jerry.jpg" alt="Young Jerry" />
                    </div>
                    <div>
                        <p>Gerald (Jerry) is retired and takes photos whenever he can. He has been taking pictures most of his adult life. He loves most all types of Photography.</p>
                    </div>
                </div>
            </div>
        )
    }
}