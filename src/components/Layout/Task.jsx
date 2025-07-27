import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";

import { IconButton, Paper } from "@mui/material";

const Task = () => {
  return (
    <div className="flex justify-between items-center gap-3 p-4">
      <div className="flex gap-2">
        <ModeEditOutlineOutlinedIcon
          color="primary"
          onClick={() => alert("Edit Task")}
        />
        <DeleteOutlineOutlinedIcon
          color="error"
          onClick={() => alert("Delete Task")}
        />
        <DoneOutlinedIcon
          color="success"
          onClick={() => alert("Mark as Done")}
        />
        <CloseOutlinedIcon
          color="secondary"
          onClick={() => alert("Cancel")} 
        />
      </div>

      <Paper
        elevation={3}
        sx={{
          padding: "10px 16px",
          flexGrow: 1,
          bgcolor: "background.paper",
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
        }}
        onClick={() => {
          alert("hello");
        }}
      >
        <h1>Task Name</h1>
      </Paper>
    </div>
  );
};

export default Task;
