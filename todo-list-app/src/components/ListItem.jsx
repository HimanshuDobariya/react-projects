import React, { useState } from "react";
import EditTask from "./EditTask";

const ListItem = ({ task, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);
  const toggle = () => setModal(!modal);

  const colors = [
    {
      primaryColor: "#5D93E1",
      secondaryColor: "#ECF3FC",
    },
    {
      primaryColor: "#F9D288",
      secondaryColor: "#FEFAF1",
    },
    {
      primaryColor: "#5DC250",
      secondaryColor: "#F2FAF1",
    },
    {
      primaryColor: "#F48687",
      secondaryColor: "#FDF1F1",
    },
    {
      primaryColor: "#B964F7",
      secondaryColor: "#F3F0FD",
    },
  ];

  const handleDelete = () => {
    console.log(index);
    deleteTask(index);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  return (
    <div className="card-wrapper">
      <div
        className="card-top"
        style={{ backgroundColor: colors[index % 5].primaryColor }}
      ></div>
      <div className="task-holder">
        <span
          className="card-header"
          style={{ backgroundColor: colors[index % 5].secondaryColor }}
        >
          {task.name}
        </span>
        <p>{task.desc}</p>

        <div className="btn-container">
          <i
            className="fa-regular fa-pen-to-square"
            style={{ color: colors[index % 5].primaryColor }}
            onClick={() => {
              setModal(!modal);
            }}
          ></i>
          <i
            className="fa-solid fa-trash"
            style={{ color: colors[index % 5].primaryColor }}
            onClick={handleDelete}
          ></i>
        </div>
      </div>

      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={task}
      />
    </div>
  );
};

export default ListItem;
