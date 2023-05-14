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

     const openInstagramApp = (username)=> {
      // Check if the Instagram app is installed
      if (/(iPhone|iPod|iPad)/i.test(navigator.userAgent)) {
        window.location.href = 'instagram://user?username=${username}';
      } else if (/Android/i.test(navigator.userAgent)) {
        window.location.href = 'intent://instagram/#Intent;package=com.instagram.android;scheme=https;end';
      } else {
        // Fallback URL for other platforms or when the app is not installed
        window.open('https://www.instagram.com/', '_self');
      }
    }
    
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

                <a className="Insta" href="#" onClick={openInstagramApp('conexif')}target="_self" rel="noreferrer">
                    <i class="fab fa-instagram"></i>
                </a>
            </div>
          </div>
      </div>
    );
  }

export default LoadingConex;
  