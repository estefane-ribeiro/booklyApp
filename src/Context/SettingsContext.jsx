import { createContext, useEffect, useState } from "react";

export const SettingsContext = createContext();

export const SettingsStorage = ({ children }) => {
  const [menuCollapse, setMenuCollapse] = useState(false);

  const [menuMobile, setMenuMobile] = useState(() => {
    const viewport = window.innerWidth < 770;
    return viewport;
  });

  const [openMenu, setOpenMenu] = useState(false);

  const [width, setWidth] = useState(window.innerWidth);

  function toggleMenuCollapse() {
    const newValue = !menuCollapse;
    setMenuCollapse(newValue);
  }

  useEffect(() => {
    function updateMenu() {
      if (width < 770) {
        setMenuMobile(true);
        setOpenMenu(false);
      } else if (width >= 770 && width < 1024) {
        setMenuMobile(false);
        setMenuCollapse(true);
      } else {
        setMenuMobile(false);
      }
    }

    function handleResize() {
      setWidth(window.innerWidth);
      updateMenu();
    }

    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, [width]);

  useEffect(() => {
    const modoMenuCollapse = window.localStorage.getItem("menuCollapse");
    if (modoMenuCollapse !== "null") setMenuCollapse(modoMenuCollapse);
  }, []);

  useEffect(() => {
    if (menuCollapse !== null)
      window.localStorage.setItem("menuCollapse", menuCollapse);
  }, [menuCollapse]);

  function openMenuMobile() {
    setOpenMenu(true);
  }

  function closedMenuMobile() {
    setOpenMenu(false);
  }

  return (
    <SettingsContext.Provider
      value={{
        menuCollapse,
        toggleMenuCollapse,
        menuMobile,
        openMenu,
        openMenuMobile,
        closedMenuMobile,
        setMenuCollapse,
        setMenuMobile,
      }}
    >
      {children}
    </SettingsContext.Provider>
  );
};
