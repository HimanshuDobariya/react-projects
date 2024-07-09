import React, { useEffect, useState } from "react";
import CreateTaskSet from "./CreateTaskSet";
import ListItem from "./ListItem";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);

  const toggle = () => setModal(!modal);

  useEffect(() => {
    let arr = JSON.parse(localStorage.getItem("taskList"));
    if (arr) {
      setTaskList(arr);
    }
  }, []);

  const saveTask = (newListItem) => {
    let tempList = taskList;
    tempList.push(newListItem);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setModal(false);
    setTaskList(tempList);
  };

  const deleteTask = (index) => {
    let tempList = taskList;
    tempList.splice(index, 1);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };
  
  const updateListArray = (obj, index) => {
    let tempList = taskList;
    tempList[index] = obj;
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(tempList);
    window.location.reload();
  };

  return (
    <>
      <div className="header">
        <h3 className="fs-1 fw-bold">Todo List</h3>
        <button className="btn btn-primary mt-2" onClick={toggle}>
          Create Task
        </button>
      </div>
      <CreateTaskSet modal={modal} toggle={toggle} saveTask={saveTask} />
      <div className="task-container container">
        {taskList.map((list, index) => (
          <ListItem
            key={index}
            index={index}
            task={list}
            deleteTask={deleteTask}
            updateListArray={updateListArray}
          />
        ))}
      </div>
    </>
  );
};

export default TodoList;
