import React from "react";
import FollowUs from "../../components/FollowUs/FollowUs";
import Navigation from "../../components/Navigation/Navigation";
import Participants from "../../components/Participants/Participants";

import './HomePage.css';

function HomePage(){
    

    return (
        <>
            <div class="mainDiv">
                    <Navigation></Navigation>
                    <div>
                        <p style={{color: 'white'}}>
                            <Participants/>

                        </p>

                    </div>

                    <FollowUs></FollowUs>

            </div>
        
        </>
    )
}

export default HomePage;

