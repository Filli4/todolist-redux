import React from "react";


let btnDoneColor;

export default function TodoItem(props) {
 
  const task = props.task;
  const title = props.task.title;
  const id = props.task.id;
  const isDone = props.task.isDone;

  
  if (isDone) {
    btnDoneColor = "green";
  } else {
    btnDoneColor = "orange";
  }

  return (
    <div className="flex items-center justify-between bg-gray-300 rounded-md p-2">
  <div className={`text-lg italic pl-2 ${isDone ? 'line-through' : ''}`}>{title}</div>
  <div className="flex items-center">
    <div className="p-2">
      <button
        onClick={() => props.onClickUpdateItemFn(task)}
        className={`rounded-md py-1 px-2 ${isDone ? 'bg-orange-500' : 'bg-green-500'}`}
      >
        {isDone ? 'Undone' : 'Done'}
      </button>
    </div>
    <div className="p-2">
      <button
        onClick={() => props.onClickRemoveItemFn(id)}
        className="bg-red-500 rounded-md py-1 px-2"
      >
        Remove
      </button>
    </div>
  </div>
</div>


  );
}