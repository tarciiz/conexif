
import React, {useEffect, useRef} from "react";
import { Link} from 'react-router-dom';


import './Navigation.css';

function Navigation() {

    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.play();
        }
     }, [])

    return(
        <>
            <div className="menuNav">
                
                <div className="VideoLogo" >
                    <video mautoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" id="videoAuto" ref={videoRef}>
                        <source src={process.env.PUBLIC_URL +"/conex-anim.mp4"} type="video/mp4" />
                        <source src={process.env.PUBLIC_URL +"/conex-anim.webm"} type="video/webm" />
                    </video>
                    
                </div>

                <div className="title">
                    <h2>DIRETORIO <br></br>ACADEMICO</h2><h1>CONEX</h1>
                </div>

            </div>

            <div className="items">
                <ul class="nav flex-column" id="nav">
                    <li class="nav-item d-flex">
                    
                        <Link class="nav-link active" to="/" onClick={(e)=>{activeElement(e)}} style={{'color':'#000'}}>
                        <span>Início</span>
                            
                        </Link>

                    </li>

                    <li class="nav-item d-flex">
                    
                        <Link class="nav-link active" to="/questions" onClick={(e)=>{activeElement(e)}} style={{'color':'#000'}}>
                        <span>Perguntas</span>
                            
                        </Link>

                    </li>
                </ul>
            </div>
        </>

    )

    
    function activeElement(event){
        let links = document.getElementById('nav').getElementsByClassName('nav-link')
        for(let link of links){
            link.classList.remove('active')
        }

        let element = event.target
        element.classList.add('active')

    }
}


export default Navigation;