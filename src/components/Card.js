import React, { useState } from "react";
import EditTask from "../modals/EditTask";
import { Checkbox, Container, FormControlLabel } from "@mui/material";

const category = { study: 0, meeting: 1, important: 2, work: 3, Etc: 4 };

const Card = ({ categories, taskObj, index, deleteTask, updateListArray }) => {
  const [modal, setModal] = useState(false);

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

  const toggle = () => {
    setModal(!modal);
  };

  const updateTask = (obj) => {
    updateListArray(obj, index);
  };

  const handleDelete = () => {
    deleteTask(index);
  };

  return (
    <Container class="card-wrapper mr-5">
      <div
        class="card-top"
        style={{
          "background-color": colors[category[taskObj.Category]].primaryColor,
        }}
      ></div>
      <div class="task-holder">
        {taskObj && <p className="mt-3">{`Category: ${taskObj.Category}`}</p>}
        <span
          class="card-header"
          style={{
            "background-color":
              colors[category[taskObj.Category]].secondaryColor,
            "border-radius": "10px",
          }}
        >
          {taskObj.Name}
        </span>
        <p className="mt-3">{taskObj.Description}</p>

        <div
          style={{
            position: "absolute",
            top: "160px",
            left: "10px",
            height: "30px",
            display: "flex",
            flexDirection: "riw",
            gap: "5px",
          }}
        >
          <FormControlLabel
            control={<Checkbox />}
            label="완료한 TODO"
            labelPlacement="start"
            onChange={(e) => {
              console.log(e);
            }}
            style={{ background: "#CFFFE5" }}
          />
          <button
            style={{
              color: colors[category[taskObj.Category]].primaryColor,
              cursor: "pointer",
            }}
            onClick={() => setModal(true)}
          >
            close
          </button>
          <button
            style={{
              color: colors[category[taskObj.Category]].primaryColor,
              cursor: "pointer",
            }}
            onClick={handleDelete}
          >
            Delete
          </button>
        </div>
      </div>
      <EditTask
        modal={modal}
        toggle={toggle}
        updateTask={updateTask}
        taskObj={taskObj}
      />
    </Container>
  );
};

export default Card;
