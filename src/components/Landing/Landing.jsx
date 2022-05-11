import React, { useState } from "react";
import 'bootstrap';
import 'bootstrap/dist/css/bootstrap.min.css';

import SignIn from '../SignIn.jsx';


function Landing(props) {
const {setLogin, login, setPage, page } = props;
    return (
      <div className="headerText">
        <br /><br /><br /><br />
             <div className="headerTextLarger">Get the tone of any speech <br />
            you create. Instantly. <br /><br /> </div>
            <div className="headerTextSmall">Over 220,000 speeches use website name <br />
            to improve what’s working and fix what isn’t. </div><br /> <br />
            {/* <button className="landingButton" onClick={() => setLogin(!login)}>Show me what I could achieve</button> */}
            <SignIn setPage={props.setPage} page={props.page}/>
      </div>
    );
}

export default Landing;
