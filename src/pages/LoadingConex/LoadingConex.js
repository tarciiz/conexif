import './LoadingConex.css';
import {useEffect} from "react";

function LoadingConex() {
    useEffect(() => {
        document.getElementById('video').play()
     }, [])
    
    return (
      <div className="LoadingDiv">
          <div className="Video">
          <video autoPlay loop muted playsinline id="video">
                <source src={process.env.PUBLIC_URL +"/conex-anim.mp4"} type="video/mp4" />
                <source src={process.env.PUBLIC_URL +"/conex-anim.webm"} type="video/webm" />
            </video>
            {/* <img src={process.env.PUBLIC_URL +"/conex-anim.gif"} /> */}
            <br/>
            <span className="TextLoad">LOADING
                <span class="dot-1">.</span>
                <span class="dot-2">.</span>
                <span class="dot-3">.</span>
            </span>
            <br/>
            <br/>
            <div>
                <span className="Follow">SIGA-NOS</span>
                <br/>
                <br/>

                <a className="Insta" href="https://www.instagram.com/conexif" target="_self" rel="noreferrer">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
          </div>
      </div>
    );
  }

export default LoadingConex;
  