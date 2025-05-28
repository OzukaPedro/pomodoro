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
  function handleTest(event: React.MouseEvent<HTMLAnchorElement, MouseEvent>) {
    event.preventDefault();
  }

  useEffect(() => {
    document.documentElement.setAttribute("data-theme", theme);
    localStorage.setItem("theme", theme);
  }, [theme]);
  return (
    <>
      <div className={styles.menu}>
        <a
          onClick={(event) => handleTest(event)}
          className={styles.menuLink}
          href=""
        >
          <HomeIcon />
        </a>
        <a
          onClick={(event) => handleTest(event)}
          className={styles.menuLink}
          href=""
        >
          <HistoryIcon />
        </a>
        <a
          onClick={(event) => handleTest(event)}
          className={styles.menuLink}
          href=""
        >
          <SettingsIcon />
        </a>
        <a
          onClick={(event) => handleThemeChange(event)}
          className={styles.menuLink}
          href=""
        >
          {nextThemeIcon[theme]}
        </a>
      </div>
    </>
  );
}
