import DarkModeOutlinedIcon from "@mui/icons-material/DarkModeOutlined";
import WbSunnyOutlinedIcon from "@mui/icons-material/WbSunnyOutlined";

import { useContext } from "react";
import { ThemeContext } from "../../contexts/ThemesContext";

const Header = () => {
  const Thmem = useContext(ThemeContext);

  return (
    <header className="flex justify-between items-center border-b-2 p-3">
      <h1 className="text-2xl uppercase font-bold">To Do List</h1>
      <button onClick={() => Thmem.setIsDark((prev) => !prev)}>
        {Thmem.isDark ? (
          <WbSunnyOutlinedIcon className="text-amber-400" />
        ) : (
          <DarkModeOutlinedIcon className="text-blue-900" />
        )}
      </button>
    </header>
  );
};

export default Header;
