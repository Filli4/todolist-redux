import { useRef, useState } from "react";
import { addTask, removeTask, updateTask } from "@/utils/redux/todolist";
import { useDispatch, useSelector } from "react-redux";
import TodoItem from "@/components/TodoItem";


let nextIndex = 0;

function App() {
  const dispatch = useDispatch(); 
  const todoListRedux = useSelector((state) => state.todoList);

  const inputRef = useRef();
  const [taskTitle, setTaskTitle] = useState("");

  
  function handleAddTask() {
    inputRef.current.value = "";
    const isTextInputEmpty = !taskTitle ? true : false;
    if (!isTextInputEmpty) {
      dispatch(addTask({ id: nextIndex++, title: taskTitle, isDone: false })); 
      setTaskTitle("");
    }
  }

 
  function handleRemoveTask(id) {
    dispatch(removeTask(id)); 
  }

  
 
  function handleStatusTask(task) {
    let updatedTask; 
    if (task.isDone) {
      updatedTask = { ...task, isDone: false };
    } else {
      updatedTask = { ...task, isDone: true };
    }
    
    dispatch(updateTask(updatedTask));
  }

  return (
   <div className="flex flex-col items-center justify-center">
  <div>
    <h1 className="text-3xl font-bold mb-4">TODO - APP REDUX</h1>
    <div className="flex items-center text-xl">
      <label className="mr-3"><strong>Title:</strong></label>
      <input
        className="h-10 px-3 border bg-slate-200 rounded-lg"
        type="text"
        placeholder="Add Lists"
        onChange={(e) => setTaskTitle(e.target.value)}
        maxLength="17"
        ref={inputRef}
      />
      <button
        className="ml-3 px-4 py-2 bg-blue-500 text-white rounded-lg"
        onClick={handleAddTask}
      >
        Add
      </button>
    </div>
  </div>

  <div className="mt-8">
    <ul>
      {todoListRedux.slice().reverse().map((item) => (
        <li key={item.id} className="mb-4">
          <TodoItem
            task={item}
            onClickRemoveItemFn={handleRemoveTask}
            onClickUpdateItemFn={handleStatusTask}
          />
        </li>
      ))}
    </ul>
  </div>
</div>


  );
}

export default App;