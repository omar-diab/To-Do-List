import { useState } from "react";
import {
  TextField,
  Paper,
  IconButton,
  Snackbar,
  Alert,
  Dialog,
  DialogTitle,
  DialogActions,
  Button,
} from "@mui/material";
import { useTheme } from "@mui/material/styles";
import AddOutlinedIcon from "@mui/icons-material/AddOutlined";
import ModeEditOutlineOutlinedIcon from "@mui/icons-material/ModeEditOutlineOutlined";
import DeleteOutlineOutlinedIcon from "@mui/icons-material/DeleteOutlineOutlined";
import DoneOutlinedIcon from "@mui/icons-material/DoneOutlined";
import CloseOutlinedIcon from "@mui/icons-material/CloseOutlined";
import SaveOutlinedIcon from "@mui/icons-material/SaveOutlined";

const Task = ({ tasks, setTasks, filter }) => {
  const theme = useTheme();
  const [inputValue, setInputValue] = useState("");
  const [editId, setEditId] = useState(null);
  const [editValue, setEditValue] = useState("");
  const [snack, setSnack] = useState({ open: false, message: "", severity: "success" });
  const [confirmDialog, setConfirmDialog] = useState({ open: false, id: null });

  const handleAddTask = () => {
    if (inputValue.trim() === "") return;
    setTasks((prev) => [
      ...prev,
      { id: Date.now(), name: inputValue.trim(), status: "Pending" },
    ]);
    setInputValue("");
  };

  const updateTaskStatus = (id, status) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, status } : task))
    );
    setSnack({
      open: true,
      message: status === "Done" ? "Task marked as done!" : "Task cancelled!",
      severity: status === "Done" ? "success" : "info",
    });
  };

  const confirmDelete = (id) => {
    setConfirmDialog({ open: true, id });
  };

  const deleteTask = () => {
    const id = confirmDialog.id;
    setTasks((prev) => prev.filter((task) => task.id !== id));
    setSnack({ open: true, message: "Task deleted", severity: "error" });
    setConfirmDialog({ open: false, id: null });
  };

  const startEdit = (task) => {
    setEditId(task.id);
    setEditValue(task.name);
  };

  const cancelEdit = () => {
    setEditId(null);
    setEditValue("");
  };

  const saveEdit = (id) => {
    setTasks((prev) =>
      prev.map((task) => (task.id === id ? { ...task, name: editValue } : task))
    );
    setSnack({ open: true, message: "Task edited successfully", severity: "success" });
    cancelEdit();
  };

  const filteredTasks = tasks.filter((task) => {
    if (filter === "All") return true;
    if (filter === "Pending") return task.status === "Pending";
    return task.status === filter;
  });

  return (
    <>
      <div className="flex items-center gap-3 p-3">
        <TextField
          variant="outlined"
          placeholder="Add task"
          fullWidth
          size="small"
          value={inputValue}
          onChange={(e) => setInputValue(e.target.value)}
          sx={{
            input: {
              color: theme.palette.text.primary,
              backgroundColor: theme.palette.background.paper,
              borderRadius: "10px",
            },
          }}
        />
        <AddOutlinedIcon
          onClick={handleAddTask}
          sx={{
            borderRadius: "8px",
            p: 1,
            fontSize: 30,
            cursor: "pointer",
            bgcolor: theme.palette.mode === "dark"
              ? theme.palette.grey[800]
              : theme.palette.grey[300],
            color: theme.palette.mode === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black,
            "&:hover": {
              bgcolor: theme.palette.mode === "dark"
                ? theme.palette.grey[700]
                : theme.palette.grey[400],
            },
          }}
        />
      </div>

      <div className="p-5">
        {filteredTasks.map((task) => (
          <div key={task.id} className="flex justify-between items-center gap-4 mt-2">
            <div className="flex gap-2">
              {editId === task.id ? (
                <>
                  <IconButton color="success" onClick={() => saveEdit(task.id)}>
                    <SaveOutlinedIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={cancelEdit}>
                    <CloseOutlinedIcon />
                  </IconButton>
                </>
              ) : (
                <>
                  <IconButton color="primary" onClick={() => startEdit(task)}>
                    <ModeEditOutlineOutlinedIcon />
                  </IconButton>
                  <IconButton color="error" onClick={() => confirmDelete(task.id)}>
                    <DeleteOutlineOutlinedIcon />
                  </IconButton>
                  <IconButton color="success" onClick={() => updateTaskStatus(task.id, "Done")}>
                    <DoneOutlinedIcon />
                  </IconButton>
                  <IconButton color="secondary" onClick={() => updateTaskStatus(task.id, "Cancelled")}>
                    <CloseOutlinedIcon />
                  </IconButton>
                </>
              )}
            </div>
            <Paper
              elevation={3}
              sx={{
                padding: "10px 16px",
                bgcolor: "background.paper",
                flexGrow: 1,
                display: "flex",
                justifyContent: "center",
                alignItems: "center",
              }}
            >
              {editId === task.id ? (
                <TextField
                  size="small"
                  value={editValue}
                  onChange={(e) => setEditValue(e.target.value)}
                  fullWidth
                  sx={{
                    input: {
                      padding: "4px 8px",
                      borderRadius: "4px",
                      color: theme.palette.text.primary,
                    },
                  }}
                />
              ) : (
                task.name
              )}
            </Paper>
          </div>
        ))}
      </div>

      {/* Snackbar */}
      <Snackbar
        open={snack.open}
        autoHideDuration={2000}
        onClose={() => setSnack({ ...snack, open: false })}
        anchorOrigin={{ vertical: "top", horizontal: "left" }}
      >
        <Alert severity={snack.severity} sx={{ width: "100%" }}>
          {snack.message}
        </Alert>
      </Snackbar>

      {/* Confirmation Dialog */}
      <Dialog open={confirmDialog.open} onClose={() => setConfirmDialog({ open: false, id: null })}>
        <DialogTitle>Are you sure you want to delete this task?</DialogTitle>
        <DialogActions>
          <Button onClick={() => setConfirmDialog({ open: false, id: null })}>No</Button>
          <Button color="error" onClick={deleteTask}>Yes</Button>
        </DialogActions>
      </Dialog>
    </>
  );
};

export default Task;
