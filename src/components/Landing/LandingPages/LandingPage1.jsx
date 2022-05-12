import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';
import SignIn from '../../SignIn.jsx';
import PageImage from '../../../assets/PageImage.jsx'

function LandingPage1() {

    return (
     <div className="landingpage0">
      <div className="page-slogan">
          <h2>
            Get the tone of any<br />
             speech you create. <br />
            Instantly.
          </h2>
          <br />
          <p>
            Save. Analyze. Re-edit. All in one<br />
            organizational space.
          </p>

        </div>

        <div className="page-drawing">
          <PageImage />
        </div>
        </div>
    );
}

export default LandingPage1;






      //   <div className="headerText">
      //   <br /><br /><br /><br />
      //        <div className="headerTextLarger">Get the tone of any speech <br />
      //       you create. Instantly. <br /><br /> </div>
      //       <div className="headerTextSmall">Over 220,000 speeches use website name <br />
      //       to improve what’s working and fix what isn’t. </div><br /> <br />
      //       {/* <button className="landingButton" onClick={() => setLogin(!login)}>Show me what I could achieve</button> */}
      //       <SignIn setPage={props.setPage}/>
      // </div>

