import React, { useState } from "react";
import {
  Autocomplete,
  Button,
  Dialog,
  DialogActions,
  DialogContent,
  DialogContentText,
  DialogTitle,
  TextField,
} from "@mui/material";

const CreateTaskPopup = ({ categories, modal, toggle, save }) => {
  const [taskName, setTaskName] = useState("");
  const [description, setDescription] = useState("");
  const [category, setCategory] = useState("");

  const handleChange = (e) => {
    const { name, value } = e.target;
    if (name === "taskName") {
      setTaskName(value);
    } else if (name === "description") {
      setDescription(value);
    }
  };

  const handleSave = (e) => {
    e.preventDefault();
    let taskObj = {};
    taskObj["Name"] = taskName;
    taskObj["Description"] = description;
    taskObj["Category"] = category;
    save(taskObj);
  };

  return (
    <Dialog open={modal} onClose={toggle}>
      <DialogTitle>Create Task</DialogTitle>
      <DialogContent>
        <DialogContentText>
          <div className="form-group">
            <Autocomplete
              disablePortal
              id="combo-box-demo"
              name="categories"
              value={category}
              options={categories}
              onChange={(e, newValue) => {
                setCategory(newValue);
              }}
              sx={{ width: 300 }}
              renderInput={(params) => (
                <TextField {...params} label="Categories" />
              )}
            />
          </div>
          <div className="form-group">
            <TextField
              label="Task Name"
              variant="outlined"
              fullWidth
              value={taskName}
              onChange={handleChange}
              name="taskName"
              margin="dense"
            />
          </div>
          <div className="form-group">
            <TextField
              label="Description"
              variant="outlined"
              fullWidth
              multiline
              rows={5}
              value={description}
              onChange={handleChange}
              name="description"
              margin="dense"
            />
          </div>
        </DialogContentText>
      </DialogContent>
      <DialogActions>
        <Button color="primary" onClick={handleSave}>
          Create
        </Button>
        <Button color="secondary" onClick={toggle}>
          Cancel
        </Button>
      </DialogActions>
    </Dialog>
  );
};

export default CreateTaskPopup;
