import {
  HistoryIcon,
  HomeIcon,
  MoonIcon,
  SettingsIcon,
  SunIcon,
} from "lucide-react";
import styles from "./styles.module.css";
import { useEffect, useState } from "react";

type AvaliableThemes = "dark" | "light";

export function Menu() {
  const [theme, setTheme] = useState<AvaliableThemes>(() => {
    const storageTheme =
      (localStorage.getItem("theme") as AvaliableThemes) || "dark";
    return storageTheme;
  });

  const nextThemeIcon = {
    dark: <SunIcon />,
    light: <MoonIcon />,
  };

  function handleThemeChange(
    event: React.MouseEvent<HTMLAnchorElement, MouseEvent>
  ) {
    event.preventDefault();
    setTheme((prevTheme) => {
      const nextTheme = prevTheme === "dark" ? "light" : "dark";
      return nextTheme;
    });
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <div className={styles.menu}>
        <a className={styles.menuLink} href="">
          <HomeIcon />
        </a>
        <a className={styles.menuLink} href="">
          <HistoryIcon />
        </a>
        <a className={styles.menuLink} href="">
          <SettingsIcon />
        </a>
        <a
          onClick={(event) => handleThemeChange(event)}
          className={styles.menuLink}
          href=""
        >
          {theme === "dark" ? <SunIcon /> : <MoonIcon />}
        </a>
      </div>
    </>
  );
}
