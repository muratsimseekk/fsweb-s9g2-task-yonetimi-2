import {
  differenceInMilliseconds,
  formatDistance,
  parse,
  parseISO,
} from "date-fns";
import { formatDistanceToNow } from "date-fns/esm";
import React from "react";

const Task = ({ taskObj, onComplete }) => {
  const endDate = parseISO(taskObj.deadline);
  const distance = formatDistanceToNow(endDate);
  const msDifference = differenceInMilliseconds(endDate, new Date());
  // // console.log(typeof msDifference); // number
  console.log("saat farki : ", Math.floor(msDifference / 1000 / 60 / 60));

  return (
    <div className="task">
      <h3>{taskObj.title}</h3>
      <div className="deadline">
        {msDifference / 1000 / 60 / 60 <= 72 ? (
          <span className="bg-[#FFD9D4]">Son teslim: {distance} </span>
        ) : (
          <span className="bg-indigo-200"> Son teslim: {distance} </span>
        )}
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
