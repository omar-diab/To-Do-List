import Container from "@mui/material/Container";
import { Header, Footer, Category, Input, Task } from "./components";

import { ThemeProvider } from "@mui/material/styles";
import CssBaseline from "@mui/material/CssBaseline";

import { lightTheme, darkTheme } from "./ui/themes";
import { useState } from "react";

import { ThemeContext } from "./contexts/ThemesContext";

function App() {
  const [isDark, setIsDark] = useState(true);

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
          <Category />
          <Input />
          <Task />
          <Task />
          <Footer />
        </Container>
      </ThemeProvider>
    </ThemeContext.Provider>
  );
}

export default App;
