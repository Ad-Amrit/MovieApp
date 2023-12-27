// Status.jsx
import React, { useState, useEffect } from 'react';

const Status = ({ onUpdateStatus, initialStatus, movieId }) => {
  const [status, setStatus] = useState(() => {
    const storedStatus = localStorage.getItem(`movieStatus_${movieId}`);
    return storedStatus || initialStatus || '';
  });

  useEffect(() => {
    if (typeof onUpdateStatus === 'function') {
      onUpdateStatus(movieId, status);
    }
    localStorage.setItem(`movieStatus_${movieId}`, status);
  }, []);

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus((prevStatus) => (prevStatus === newStatus ? prevStatus : newStatus));
  };

  return (
    <select value={status} onChange={handleStatusChange}>
      <option value="Completed">Completed</option>
      <option value="Watching">Watching</option>
      <option value="HoldList">HoldList</option>
    </select>
  );
};

export default Status;
