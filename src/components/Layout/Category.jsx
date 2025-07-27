import { categorys } from "../../data/Index";

import { useTheme } from "@mui/material/styles";
import Button from "@mui/material/Button";

const Category = () => {
  const theme = useTheme();

  return (
    <div>
      <ul
        style={{
          display: "flex",
          justifyContent: "center",
          alignItems: "center",
          gap: "1.5rem",
          padding: "12px",
        }}
      >
        {categorys.map((category) => (
          <li key={category.id}>
            <Button
              variant='contained'
              onClick={() => alert("hello")}
              sx={{
                bgcolor:
                  theme.palette.mode === "dark"
                    ? theme.palette.grey[800]
                    : theme.palette.grey[300],
                color:
                  theme.palette.mode === "dark"
                    ? theme.palette.common.white
                    : theme.palette.common.black,
                borderRadius: "8px",
                textTransform: "none",
                "&:hover": {
                  bgcolor:
                    theme.palette.mode === "dark"
                      ? theme.palette.grey[700]
                      : theme.palette.grey[400],
                },
              }}
            >
              {category.name}
            </Button>
          </li>
        ))}
      </ul>
    </div>
  );
};

export default Category;
