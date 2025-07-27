import AddOutlinedIcon from "@mui/icons-material/AddOutlined";

import { TextField } from "@mui/material";
import { useTheme } from "@mui/material/styles";

const Input = () => {
  const theme = useTheme();

  return (
    <div className="flex items-center gap-3 p-3">
      <TextField
        variant="outlined"
        placeholder="Add task"
        fullWidth
        size="small"
        sx={{
          input: {
            color: theme.palette.text.primary,
            backgroundColor: theme.palette.background.paper,
            borderRadius: "4px",
          },
        }}
      />
      <AddOutlinedIcon
        onClick={() => alert("Add Task")}
        sx={{
          borderRadius: "8px",
          p: 1,
          fontSize: 30,
          bgcolor:
            theme.palette.mode === "dark"
              ? theme.palette.grey[800]
              : theme.palette.grey[300],
          color:
            theme.palette.mode === "dark"
              ? theme.palette.common.white
              : theme.palette.common.black,
          textTransform: "none",
          "&:hover": {
            bgcolor:
              theme.palette.mode === "dark"
                ? theme.palette.grey[700]
                : theme.palette.grey[400],
          },
        }}
      />
    </div>
  );
};

export default Input;
