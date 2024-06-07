import React, { PureComponent} from 'react';
import { Outlet, Link } from "react-router-dom";
import {Slide} from 'react-slideshow-image';
import 'react-slideshow-image/dist/styles.css';
import './HomeContent.css';
import '../global/GlobalStylings.css';
const responsiveSettings = [
    {
        breakpoint: 800,
        settings: {
            slidesToShow: 3,
            slidesToScroll: 3
        }
    },
    {
        breakpoint: 500,
        settings: {
            slidesToShow: 2,
            slidesToScroll: 2
        }
    }
];
export default class HomeContent extends PureComponent{
    render(){
        
        return(
            <div class="nav-bar-padding">
                {/* <div>
                    <Slide slidesToScroll={3} slidesToShow={2} indicators={true} responsive={responsiveSettings}>
                            <img src="/photos/home/flower.jpg" alt="Becker's Flower" />
                            <img src="/photos/home/gc.jpg" alt="Grand Canyon" />
                            <img src="/photos/home/greer_birds.jpg" alt="Greer Birds" />
                    </Slide>
                </div> */}
                <div class = "banner-container display-flex">
                    <div class = "desktop-only banner-elem" style = {{flex : 0.666}}>
                        <img class = "banner-image" src="/photos/home/flower.jpg" alt="Becker's Flower" />
                    </div> 
                    <div class = "banner-elem" style = {{flex : 1.5}}>
                        <img class = "banner-image" src="/photos/home/gc.jpg" alt="Grand Canyon" />
                    </div>
                    <div class = "desktop-only banner-elem" style = {{flex : 0.86}}>
                        <img class = "banner-image" src="/photos/home/greer_birds.jpg" alt="Greer Birds" />
                    </div>
                </div>
                <div class = "introduction">
                    <div class="display-flex mobile-column">
                        <img class="intro-image" src="/photos/home/orchid.jpg" alt="Orchid"/>
                        <div class="introduction-text">
                            <p>
                            Fely and I are happy and glad that we can live in an area that still has such a diversity of wildlife. We love getting out to our haunts and observing the antics that the animals participate in. 
                            It is sad that so much habitat has been and continues to impacted by the encroachment of population and by climate change which is becoming so evident. All we can do now is appreciate what we do have. 
                            </p>
                            <p>
                            Some folks have encouraged us to share our pictures so when I came across this opportunity to get a website, I did. 
                            My first order of business is to get organized and to go through our pictures and choose some that will show what is living in those areas that we visit most. 
                            After I will add commentary and identification. Also I may later add some older pictures taken during vacations.
                            </p>
                        </div>
                    </div>
                </div>
                <div class = "display-flex mobile-column">
                    <a href = "/fely" class="about-elem">
                        <img class="about-photo" src="/photos/home/fely.jpg" alt="Fely's Photography"/>
                        <Link to = "/fely" class="text-center margin-top-20 link" href="">Fely's Photography</Link>
                    </a>
                    <a href="/jerry" class="about-elem">
                        <img class="about-photo" src="/photos/home/avatar.jpg" alt="Jerry's Photography"/>
                        <Link to = "/jerry" class="text-center margin-top-20 link" href="">Jerry's Photography</Link>
                    </a>
                    <a href = "/about-us" class="about-elem">
                        <img class="about-photo" src="/photos/home/rv-2.jpg" alt="Fely's Photography"/>
                        <Link to = "/about-us" class="text-center margin-top-20 link" href="">About Us</Link>
                    </a>
                </div>

            </div>
        )
    }
}
