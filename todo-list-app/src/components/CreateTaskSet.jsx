import React, { useState } from "react";
import { Button, Modal, ModalHeader, ModalBody, ModalFooter } from "reactstrap";

const CreateTaskSet = ({ modal, toggle, saveTask }) => {
  const [task, setTask] = useState({
    taskName: "",
    description: "",
  });

  function handleChange(e) {
    setTask((prev) => ({ ...prev, [e.target.name]: e.target.value }));
  }

  function handleSave() {
    let newListItem = {};
    newListItem["name"] = task.taskName;
    newListItem["desc"] = task.description;
    saveTask(newListItem);
    task.taskName = "";
    task.description = "";
  }

  return (
    <Modal isOpen={modal} toggle={toggle}>
      <ModalHeader toggle={toggle}>Create Task</ModalHeader>
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
              value={task.desc}
              rows={5}
              className="form-control"
              onChange={handleChange}
            ></textarea>
          </div>
        </form>
      </ModalBody>
      <ModalFooter>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </ModalFooter>
    </Modal>
  );
};

export default CreateTaskSet;
