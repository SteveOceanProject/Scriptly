import React, { useState, useEffect } from 'react';

function HistoryList(props) {
  console.log(props)

  // assume that data will be passed down through props in homepage
  const renderList = (arr) => {
    if (!arr) {
      return null;
    }
    return (
      <div className="flex-down-container history-container">
        {arr.map((item) => (
          <HistoryItem
            key={item.id}
            item={item}
          />
        ))}
      </div>
    );
  };


  return (
    <div>
      <div className="d-flex w-100 justify-content-between">
        <h5 className="mb-1">Speech History</h5>
        <small>Richard Feynman</small>
    </div>
  )

}

export default HistoryList;