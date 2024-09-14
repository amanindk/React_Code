import ThemeBtn from "../components/09themecontext/Themebtn";
import Card from "../components/09themecontext/Card";
import { ThemeProvider } from "../context/theme";
import { useState, useEffect } from "react";

function Theme() {
  const [themeMode, setThemeMode] = useState("light");

  const lighttheme = () => {
    setThemeMode("light");
  };
  const darktheme = () => {
    setThemeMode("dark");
  };

  useEffect(() => {
    document.querySelector("html").classList.remove("light", "dark");
    document.querySelector("html").classList.add(themeMode);
  }, [themeMode]);

  return (
    <ThemeProvider value={{ themeMode, lighttheme, darktheme }}>
      <div className="flex flex-wrap min-h-screen items-center">
        <div className="w-full">
          <div className="w-full max-w-sm mx-auto flex justify-end mb-4">
            <ThemeBtn />
          </div>

          <div className="w-full max-w-sm mx-auto">
            <Card />
          </div>
        </div>
      </div>
    </ThemeProvider>
  );
}

export default Theme;
