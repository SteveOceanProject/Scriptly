import React, { useState, useEffect } from 'react';
import axios from 'axios';
import HistoryItem from './HistoryItem.jsx';
import mockData from './mockData.js';
import DoughnutChart from '../charts/DoughnutChart.jsx';

function HistoryList(props) {
  const { id, title, name, email, speech } = mockData;
  const [history, setHistory] = useState([]);

  const getHistory = () => {
    axios.get(`/speech/627a9e00de163a667afa07a1`)
      .then(res => {
        setHistory(res.data[0].speeches)
      })
      .catch(err => new Error('FAIL!!!!!!'));
  }

  useEffect(() => {
    getHistory();
    }, []);

  // assume that data will be passed down through props in homepage
  const renderList = (arr) => {
    if (!arr) {
      return null;
    }
    return (
      <ul className="speech-version-list">
        {arr.map((item, index) => (
          <HistoryItem
            key={item._id}
            index={index}
            date={item.date}
            body={item.body}
            analysis={item.analysis}
            title={item.title}
          />
        ))}
      </ul>
    );
  };
  return (
    <div className="flex-down-container history-list-container">
      <h5 className="mb-1">{`Speech:  ${title}`}</h5>
      <small>{name}</small>
      <div className="doughnut-medium ">
        <DoughnutChart
          analysis={speech[0].analysis}
          labelsOn={true}
        />
      </div>
      <hr />
      <div className="speech-version-scroll-list">
        {history ? renderList(history) : null}
      </div>
    </div>
  );
}

export default HistoryList;
