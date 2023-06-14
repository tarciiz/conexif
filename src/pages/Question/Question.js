import React from "react";
import FollowUs from "../../components/FollowUs/FollowUs";
import Navigation from "../../components/Navigation/Navigation";

import './Question.css';

function Question(){
    

    return (
        <>
            <div class="mainDiv">
                    <Navigation></Navigation>
                    <div className="frameQ">
                        <iframe src="https://docs.google.com/forms/d/e/1FAIpQLSc7nQWt8Jy3ol2B-2StqRkcJW-9bsg1dKwoRTUOAs-P_ePR3Q/viewform?embedded=true" 
                        id="questionFrame" frameborder="0" marginheight="0" marginwidth="0" scrolling="no">Carregando…</iframe>

                    </div>

                    <FollowUs></FollowUs>

            </div>
        
        </>
    )
}

export default Question;

