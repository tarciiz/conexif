import React from 'react';

function FollowUs(){
    return (
        <>
            <div style={{"text-align": "center"}}>
                <span className="Follow">SIGA-NOS</span>
                <br/>
                <br/>

                <a className="Insta" href="https://www.instagram.com/conexif" target="_blank" rel="noreferrer">
                    <i class="fab fa-instagram"></i>
                </a>

                <a style={{'margin-left':'10px'}} className="Insta" href="https://t.me/conexif" target="_blank" rel="noreferrer">
                    <i class="fab fa-telegram telegram-icon"></i>
                </a>
            </div>
        </>
    )
}

export default FollowUs;