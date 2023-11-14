import { formatDistance, parseISO } from "date-fns";
import { formatDistanceToNow } from "date-fns/esm";
import React from "react";

const Task = ({ taskObj, onComplete }) => {
  function zaman() {
    const startDate = new Date();
    const endDate = parseISO(taskObj.deadline);

    const distance = formatDistance(startDate, endDate);
    return distance;
  }

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        son teslim: <span>{zaman()}</span>
      </div>
      <p>{taskObj.description}</p>
      <div>
        {taskObj.people.map((p) => (
          <span className="pill" key={p}>
            {p}
          </span>
        ))}
      </div>
      {onComplete && (
        <button onClick={() => onComplete(taskObj.id)}>Tamamlandı</button>
      )}
    </div>
  );
};

export default Task;
