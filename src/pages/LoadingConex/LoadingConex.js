import './LoadingConex.css';
import {useEffect, useRef } from "react";

function LoadingConex() {
    const videoRef = useRef(null);

    useEffect(() => {
        const video = videoRef.current;

        if (video) {
            video.play();
        }
     }, [])

    return (
      <div className="LoadingDiv">
          <div className="Video" >
          <video mautoPlay="autoplay" playsInLine="playsinline" loop="true" muted="true" id="videoAuto" ref={videoRef}>
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

                <a className="Insta" href="https://www.instagram.com/conexif" target="_blank" rel="noreferrer">
                    <i class="fab fa-instagram"></i>
                </a>

                <a style={{'margin-left':'10px'}} className="Insta" href="https://t.me/conexif" target="_blank" rel="noreferrer">
                    <i class="fab fa-telegram telegram-icon"></i>
                </a>
            </div>
          </div>
      </div>
    );
  }

export default LoadingConex;
  