import React from "react";
import FollowUs from "../../components/FollowUs/FollowUs";
import Navigation from "../../components/Navigation/Navigation";

import './HomePage.css';

function HomePage(){
    

    return (
        <>
            <div class="mainDiv">
                    <Navigation></Navigation>
                    <div>
                        <p style={{color: 'white'}}>
                            Diretório academico conex

                        </p>

                    </div>

                    <FollowUs></FollowUs>

            </div>
        
        </>
    )
}

export default HomePage;

