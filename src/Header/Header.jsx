import { useContext } from "react";
import image2 from "../assets/image2.png";
import { MdArrowForward, MdOutlineLogin } from "react-icons/md";
import { SettingsContext } from "../Context/SettingsContext";

const Header = () => {
  const { menuCollapse, menuMobile } = useContext(SettingsContext);

  return (
    <div
      className={`py-8  ${menuCollapse || menuMobile ? "w-[95vw] sm:pr-8" : "w-[80vw]"}`}
    >
      <div
        className={`top flex  ml-10 items-center gap-1 mb-10 ${menuMobile ? "justify-end max-sm:gap-0" : ""} 
                  ${menuCollapse ? "justify-center lg:justify-between" : "w-[70vw] justify-between "} `}
      >
        <input
          type="text"
          placeholder="🔍︎ Buscar livros, autores ou categorias."
          className="p-2 size-8 rounded-full mr-2 focus:size-max md:p-4 md:w-1/2 bg-gray-900 md:rounded-2xl lg:max-w-1/3"
        />
        <div className="md:space-x-2">
          <button
            id="login"
            className="max-sm:rounded-full max-sm:p-2 px-4 py-2 font-bold rounded-lg bg-linear-to-r from-violet-950 to-violet-700 hover:from-violet-500 hover:to-violet-950 hover:scale-105 transition duration-200 cursor-pointer"
          >
            <span className="max-sm:block sm:hidden">
              <MdOutlineLogin />
            </span>
            <span className="max-sm:hidden">Login</span>
          </button>
          <button
            id="cadastro"
            className="max-sm:hidden px-4 py-2 font-bold rounded-lg bg-linear-to-r from-violet-950 to-violet-700 hover:from-violet-500 hover:to-violet-950 hover:scale-105 transition duration-200 cursor-pointer"
          >
            Cadastra-se
          </button>
        </div>
      </div>

      <div
        className={`flex justify-around items-center ${menuCollapse || menuMobile ? "flex-col-reverse justify-center items-center lg:flex-row lg:justify-around" : ""}`}
      >
        <div
          className={`${menuCollapse || menuMobile ? "flex flex-col justify-center items-center gap-2 lg:justify-start lg:items-start" : "*:m-4"}`}
        >
          <h1 className="text-2xl md:text-3xl lg:text-5xl 2xl:text-6xl font-bold  text-white">
            Encontre o seu próximo{" "}
            <span className="inline-block bg-linear-to-b from-violet-950 to-violet-500 bg-clip-text text-transparent font-black">
              livro
            </span>
          </h1>
          <p className="text-sm lg:text-[18px] text-gray-500">
            Milhares de histórias, infinitas possibilidades.
          </p>
          <button
            className={`flex items-center gap-3 bg-linear-to-b from-violet-950 to-violet-700 hover:from-violet-500 hover:to-violet-950 transition duration-200 cursor-pointer px-4 py-2 rounded-2xl ${menuCollapse ? "mt-3" : "mt-8"}`}
          >
            Explorar agora <MdArrowForward />
          </button>
        </div>
        <div
          className={`${menuCollapse || menuMobile ? "w-78 lg:w-1/2" : "w-1/2"} max-w-125`}
        >
          <img src={image2} className="min-w-75" />
        </div>
      </div>
    </div>
  );
};

export default Header;
