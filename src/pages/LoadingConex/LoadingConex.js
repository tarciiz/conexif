import './LoadingConex.css';

function LoadingConex() {
    return (
      <div className="LoadingDiv">
          <div className="Video">
            <video autoPlay loop muted>
                <source src={process.env.PUBLIC_URL +"/conex-anim.mp4"} type="video/mp4" />
                <p style={{'color':'white'}}>Your browser does not support the video tag.</p>
            </video>
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
  