import React, { useEffect, useState } from "react";
import CreateTask from "../modals/CreateTask";
import Card from "./Card";
import { Button, Container, Divider } from "@mui/material";

const TodoList = () => {
  const [modal, setModal] = useState(false);
  const [taskList, setTaskList] = useState([]);
  const [categories, setCategories] = useState([]);

  useEffect(() => {
    let arr = localStorage.getItem("taskList");

    if (arr) {
      let obj = JSON.parse(arr);
      setTaskList(obj);
    }

    setCategories(["study", "meeting", "important", "work"]);
  }, []);

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

  const toggle = () => {
    setModal(!modal);
  };

  const saveTask = (taskObj) => {
    let tempList = taskList;
    tempList.push(taskObj);
    localStorage.setItem("taskList", JSON.stringify(tempList));
    setTaskList(taskList);
    setModal(false);
  };

  return (
    <>
      <Container>
        <h3>Todo List</h3>
        <Button variant="outlined" onClick={() => setModal(true)}>
          Create Task
        </Button>
      </Container>
      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              categories={categories}
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <Divider textAlign="left">Completed Task</Divider>
      <div className="task-container">
        {taskList &&
          taskList.map((obj, index) => (
            <Card
              categories={categories}
              taskObj={obj}
              index={index}
              deleteTask={deleteTask}
              updateListArray={updateListArray}
            />
          ))}
      </div>
      <CreateTask
        categories={categories}
        toggle={toggle}
        modal={modal}
        save={saveTask}
      />
    </>
  );
};

export default TodoList;
