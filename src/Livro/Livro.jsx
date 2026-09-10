import { useContext } from "react";
import { SettingsContext } from "../Context/SettingsContext";
import { FetchContext } from "../Context/FetchContext";

const Livro = ({ title, foto, autor, chave, generos, edicoes, publicacao }) => {
  const { menuCollapse, menuMobile } = useContext(SettingsContext);
  const { setBook, setInfoBook } = useContext(FetchContext);
  const cover = `https://covers.openlibrary.org/b/id/${foto}-M.jpg`;
  const infosBook = { title, cover, autor, generos, edicoes, publicacao };
  function handleClickBook() {
    const id = `https://openlibrary.org${chave}.json`;
    setBook(id);
    setInfoBook(infosBook);
  }
  return (
    <>
      <div
        className={`${menuCollapse || menuMobile ? "w-35 p-2 lg:w-46" : "w-46 p-4"} flex flex-col  bg-transparent 
                hover:bg-violet-950/20 rounded-2xl cursor-pointer transition hover:scale-105`}
        onClick={handleClickBook}
      >
        <div className=" py-2 flex flex-col items-center justify-center">
          <img
            src={cover}
            //   object-fit="cover"
            alt={title}
            className={`${menuCollapse || menuMobile ? "w-30 h-36 lg:w-40 lg:h-52" : "w-40 h-52"} rounded`}
          />
        </div>

        <h3
          className={`${menuCollapse || menuMobile ? "font-medium" : "font-black"}  `}
        >
          {title}
        </h3>
        <p
          className={`${menuCollapse || menuMobile ? "text-sm" : "text-[16px]"} text-gray-600`}
        >
          {autor}
        </p>
      </div>
    </>
  );
};

export default Livro;
