import React, { useEffect, useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const EditTask = ({ modal, toggle, updateTask, taskObj }) => {
  const [task, setTask] = useState({
    taskName: "",
    description: "",
  });

  useEffect(() => {
    task.taskName = taskObj.name;
    task.description = taskObj.desc;
  }, []);

  function handleChange(e) {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  const handleUpadete = (e) => {
    e.preventDefault();
    let tempObj = {};
    tempObj["name"] = task.taskName;
    tempObj["desc"] = task.description;
    updateTask(tempObj);
  };

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Edit Task</ModalHeader>
      <ModalBody>
        <form>
          <div className="form-group">
            <label className="mb-2">Task Name</label>
            <input
              type="text"
              name="taskName"
              value={task.taskName}
              className="form-control mb-3"
              onChange={handleChange}
            />
          </div>
          <div className="form-group">
            <label className="mb-2">Description</label>
            <textarea
              name="description"
              value={task.description}
              rows={5}
              className="form-control"
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleUpadete}>
          Update
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default EditTask;
