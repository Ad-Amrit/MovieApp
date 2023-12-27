import React, { useState } from "react";

const Status = ({ initialStatus, movieId }) => {
  const [status, setStatus] = useState(() => {
    const storedStatus = localStorage.getItem(`movieStatus_${movieId}`);
    return storedStatus || initialStatus || "";
  });

  const handleStatusChange = (e) => {
    const newStatus = e.target.value;
    setStatus((prevStatus) =>
      prevStatus === newStatus ? prevStatus : newStatus
    );
    localStorage.setItem(`movieStatus_${movieId}`, newStatus);
    window.location.reload();
  };

  return (
    <select value={status} onChange={handleStatusChange}>
      <option value="default">Default</option>
      <option value="completed">Completed</option>
      <option value="watching">Watching</option>
      <option value="holdList">HoldList</option>
    </select>
  );
};

export default Status;