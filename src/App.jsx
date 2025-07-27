import Container from "@mui/material/Container";
import { Header, Footer, Category, Task } from "./components";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { lightTheme, darkTheme } from "./ui/themes";
import { useState, useEffect } from "react";
import { ThemeContext } from "./contexts/ThemesContext";

function App() {
  // Persist theme from localStorage
  const [isDark, setIsDark] = useState(() => {
    const storedTheme = localStorage.getItem("isDark");
    return storedTheme === null ? true : JSON.parse(storedTheme);
  });

  // Persist tasks from localStorage
  const [tasks, setTasks] = useState(() => {
    const storedTasks = localStorage.getItem("tasks");
    return storedTasks ? JSON.parse(storedTasks) : [];
  });

  const [filter, setFilter] = useState("All");

  // Save theme to localStorage on change
  useEffect(() => {
    localStorage.setItem("isDark", JSON.stringify(isDark));
  }, [isDark]);

  // Save tasks to localStorage on change
  useEffect(() => {
    localStorage.setItem("tasks", JSON.stringify(tasks));
  }, [tasks]);

  return (
    <ThemeContext.Provider value={{ isDark, setIsDark }}>
      <ThemeProvider theme={isDark ? darkTheme : lightTheme}>
        <CssBaseline />
        <Container
          maxWidth="sm"
          sx={{
            bgcolor: isDark ? "#1e1e1e" : "#ffffff",
            mt: 8,
            borderRadius: 5,
          }}
        >
          <Header />
          <Category setFilter={setFilter} />
          <Task tasks={tasks} setTasks={setTasks} filter={filter} />
          <Footer />
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
