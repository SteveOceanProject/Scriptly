import React from 'react';
import ConditionalWindow from './conditionalWindow.jsx';
import {useRecoilState} from 'recoil';
import {pageView} from '../../atoms.jsx';

const Homepage = () => {

  const [pageValue, setPage] = useRecoilState(pageView);

  const submission = () => {
    console.log('this should submit current text for analysis')
  }

  const upload = () => {
    console.log('this should navigate to modal/page for upload')
  }

  const logout = () => {
    console.log('this should be replaced or linked to firebase logout?')
  }

  const avatar = () => {
    console.log('this should go to some sort of profile page?  Firebase?')
  }


  return (
    <div>
      <h1>
        Scriptly Placeholder
        <button onClick={logout()}>Logout</button>
        <div style={{
          position: 'absolute',
          borderRadius: '50px',
          height: '50px',
          width: '50px',
          backgroundColor: 'red',
          top: '0%',
          right: '0%'}} onClick={avatar()}>AV</div>
      </h1>
      <button onClick={() => {upload()}}>Upload</button>
      <button onClick={() => {submission()}}>Submit</button>

      <ul class="nav nav-tabs mb-3" id="myTab0" role="tablist">
        <li class="nav-item" role="presentation">
          <button
            class="nav-link active"
            id="home-tab0"
            data-mdb-toggle="tab"
            data-mdb-target="#home0"
            type="button"
            role="tab"
            aria-controls="home"
            aria-selected="true"
            onClick={() => {setPage('speech')}}
          >
          Speeches
          </button>
        </li>
        <li class="nav-item" role="presentation">
          <button
            class="nav-link"
            id="profile-tab0"
            data-mdb-toggle="tab"
            data-mdb-target="#profile0"
            type="button"
            role="tab"
            aria-controls="profile"
            aria-selected="false"
            onClick={() => {setPage('text')}}
          >
            Text Editor
          </button>
        </li>
      </ul>
      <div style={{height: '50vw', width: '50vw', border: '3px solid black'}}>
        <ConditionalWindow/>
      </div>

    </div>
  )
};

export default Homepage;



