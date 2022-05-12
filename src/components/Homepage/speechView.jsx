import React from 'react';
import {
  currentSpeechText, pageView,
  allSpeeches, editedSpeechText,
  currentSpeechId, updateTitle,
  editBoolean, reverser} from '../../atoms.jsx';
import {useRecoilState, useRecoilValue} from 'recoil';
import moment from 'moment';

const SpeechView = () => {

  const [currentValue, setCurrent] = useRecoilState(currentSpeechText);
  const [pageValue, setPage] = useRecoilState(pageView);
  const [editedValue, setEdited] = useRecoilState(editedSpeechText);
  const [speechValue, setSpeechValue] = useRecoilState(allSpeeches);
  const [currentId, setCurrentId] = useRecoilState(currentSpeechId);
  const [titleValue, setTitle] = useRecoilState(updateTitle);
  const [editBooleanValue, setEditBoolean] = useRecoilState(editBoolean);
  const reversed = useRecoilValue(reverser)


  const handleEdit = (index) => {
    console.log(index)
    setEdited(reversed[index].speeches[0].body);
    setCurrent(reversed[index].speeches[0].body);
    setEditBoolean(true)
    setPage('text');
    setCurrentId(reversed[index]._id)
    setTitle(reversed[index].title)
  }

  const displayHistory = (value) => {
    setCurrentId(value._id)
    setPage('history')
  }
  return (
    <div>
      <div>
        {reversed.map((value, index) => {
          let snippet = value.speeches[0].body.slice(0, 200);
          return (
            <div style={{display: 'flex'}} >
              <div key={Math.random()} style={{border: '3px solid black', width: '33vw'}}>{moment(value.speeches[0].date).format("dddd, MMMM Do YYYY, h:mm:ss a")}</div>
              <div key={Math.random()} style={{border: '3px solid black', width: '33vw'}}>{value.speeches[0].title}</div>
              <div key={Math.random()} style={{border: '3px solid black', width: '33vw'}} onClick={() => {displayHistory(value)}}>{snippet}...</div>
              <button onClick={() => {
                handleEdit(index)
              }}>Edit</button>
            </div>
          )
        })}
      </div>
    </div>
  )
}

export default SpeechView;


