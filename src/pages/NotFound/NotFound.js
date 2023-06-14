import React from "react";
import FollowUs from "../../components/FollowUs/FollowUs";
import Navigation from "../../components/Navigation/Navigation";

import './NotFound.css';

function NotFound(){
    

    return (
        <>
            <div class="mainDiv">
                    <Navigation></Navigation>
                    <div>
                        <p style={{color: 'white'}}>
                            &nbsp;&nbsp;&nbsp;404 Not found

                        </p>

                    </div>

                    <FollowUs></FollowUs>

            </div>
        
        </>
    )
}

export default NotFound;

