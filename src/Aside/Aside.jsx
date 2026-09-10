import { useContext } from "react";
import {
  MdHome,
  MdFavorite,
  MdCategory,
  MdExplore,
  MdArrowForwardIos,
  MdArrowBackIos,
  MdClose,
  MdDensityMedium,
} from "react-icons/md";
import { SettingsContext } from "../Context/SettingsContext";

const Aside = () => {
  const {
    menuCollapse,
    toggleMenuCollapse,
    menuMobile,
    openMenu,
    openMenuMobile,
    closedMenuMobile,
  } = useContext(SettingsContext);

  function handleClickMenuMobile() {
    if (menuMobile && openMenu) {
      closedMenuMobile();
    }
  }

  return (
    <div
      className={`${openMenu && menuMobile ? "fixed w-full z-20 bg-black/85 overflow-hidden " : "relative bg-[#020617]"} z-20 `}
    >
      <button
        className={`${menuMobile ? "block fixed top-8 left-4 text-3xl text-white z-30" : "hidden"} ${openMenu && menuMobile ? "hidden" : ""} `}
        onClick={openMenuMobile}
      >
        <MdDensityMedium />
      </button>
      <aside
        className={`${menuCollapse ? "bg-[#020617]  p-2" : ""} 
                    {${menuMobile ? "hidden" : "flex flex-col justify-center items-start p-8"}} 
                    h-screen sticky top-0 z-20 *:text-white {${menuMobile && openMenu ? "flex w-full justify-center items-center" : ""}
                    {${!menuMobile && !menuCollapse ? "bg-[#020617] fixed p-8" : ""}`}
        onClick={handleClickMenuMobile}
      >
        <button
          className={`${menuMobile && openMenu ? "block absolute top-8 right-2 text-3xl" : "hidden"}`}
          onClick={closedMenuMobile}
        >
          <MdClose />
        </button>
        <nav
          className={`  
          ${menuMobile && openMenu ? "flex flex-col gap-6 p-8 justify-center items-center" : "flex flex-col gap-6 group"}
          ${menuMobile && !openMenu ? "hidden" : ""} mt-4`}
        >
          <h1 className="text-4xl text-white font-bold mb-3">
            <a href="/" className={`${menuCollapse ? "hidden" : "block"}`}>
              Bookly <span className="text-blue-800">.</span>
            </a>
            <a href="" className={`${menuCollapse ? "block" : "hidden"} `}>
              B <span className="text-blue-800">.</span>
            </a>
          </h1>
          <a
            href=""
            className={`flex gap-3 items-center bg-linear-to-r from-violet-950 to-violet-700 p-4 rounded-2xl hover:bg-blue-800 `}
          >
            <MdHome />
            <span className={`${menuCollapse ? "hidden" : "block"}`}>Home</span>
          </a>
          <a
            href=""
            className="flex gap-3 items-center  p-4 rounded-2xl hover:bg-linear-to-r hover:from-violet-950 hover:to-violet-700 "
          >
            <MdExplore />{" "}
            <span className={`${menuCollapse ? "hidden" : "block"}`}>
              Explorar
            </span>
          </a>
          <a
            href="none"
            className="flex gap-3 items-center p-4 rounded-2xl hover:bg-linear-to-r hover:from-violet-950 hover:to-violet-700 active:scale-95 active:from-violet-700 active:to-violet-950 "
          >
            <MdCategory />
            <span className={`${menuCollapse ? "hidden" : "block"}`}>
              Categorias
            </span>
          </a>
          <a
            href=""
            className="flex gap-3 items-center  p-4 rounded-2xl hover:bg-linear-to-r hover:from-violet-950 hover:to-violet-700 active:scale-95 active:from-violet-700 active:to-violet-950"
          >
            <MdFavorite />{" "}
            <span className={`${menuCollapse ? "hidden" : "block"}`}>
              Favoritos
            </span>
          </a>
        </nav>
        <div
          className={`p-5 bg-purple-950 rounded-2xl mt-8 ${menuCollapse || menuMobile ? "hidden" : "block"}`}
        >
          <span className="font-bold text-6xl text-purple-500">"</span>
          <p className="citacao">Um livro é um sonho que você segura na mão.</p>
          <p className="text-gray-500 mt-5">- Neil Gaiman</p>
        </div>
        <div className={`${menuMobile ? "hidden" : "block"}`}>
          <button
            className={`absolute bottom-6 right-4 bg-violet-950/30 p-4 pl-5 rounded-full cursor-pointer transition duration-200 hover:bg-violet-950/50 hover:scale-105 ${menuCollapse ? "hidden" : "block"}`}
            onClick={toggleMenuCollapse}
          >
            <MdArrowBackIos className="text-[18px]" />
          </button>
          <button
            className={`absolute bottom-6 right-2 bg-violet-950/30 p-4 pl-5 rounded-full cursor-pointer transition duration-200 hover:bg-violet-950/50 hover:scale-105 ${menuCollapse ? "block" : "hidden"}`}
            onClick={toggleMenuCollapse}
          >
            <MdArrowForwardIos />
          </button>
        </div>
      </aside>
    </div>
  );
};

export default Aside;
