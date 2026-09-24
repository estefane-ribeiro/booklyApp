import { useContext, useState } from "react";
import Livro from "../Livro/Livro";
import { MdArrowForwardIos, MdArrowBackIos } from "react-icons/md";
import { SettingsContext } from "../Context/SettingsContext";

const BookCarousel = ({ dados }) => {
  const { menuCollapse, menuMobile } = useContext(SettingsContext);
  const [indice, setIndice] = useState(0);

  function handleClicktoRight() {
    setIndice((i) => i + 1);
    console.log(indice);
  }

  function handleClicktoLeft() {
    setIndice((i) => i - 1);
  }

  if (indice === 20) {
    setIndice(0);
  }

  const livrosCarousel = dados ? [...dados.works, ...dados.works] : "";

  return (
    <div className={`relative ${menuMobile || menuCollapse ? "" : "p-4"}`}>
      <h2 className="capitalize text-3xl mb-4">{dados?.name}</h2>
      <div>
        <button
          className={`${menuCollapse ? "md:left-[calc(100vw-150px)] text-3xl" : ""} 
                      absolute top-1/2  bg-gray-950/70 rounded-full flex items-center justify-center px-3  z-20 py-3 transition duration-200
                    hover:bg-gray-950/90 hover:scale-105 cursor-pointer
                      ${menuMobile ? "right-0" : ""}
                      ${!menuMobile && !menuCollapse ? "right-3 text-3xl" : ""}`}
          onClick={handleClicktoRight}
        >
          <MdArrowForwardIos />
        </button>
        <div
          className="flex gap-x-4 transition duration-300 "
          style={{ transform: `translate3d(-${indice * 170}px, 0, 0)` }}
        >
          {dados &&
            livrosCarousel.map((livro, indice) => (
              <Livro
                key={`${livro.key} - ${indice}`}
                title={livro.title}
                foto={livro.cover_id}
                autor={livro.authors[0].name}
                chave={livro.key}
                generos={livro.subject}
                edicoes={livro.edition_count}
                publicacao={livro.first_publish_year}
              />
            ))}
        </div>

        {indice > 0 && (
          <button
            className={`${menuCollapse || menuMobile ? "text-md md:text-3xl md:pl-4 md:pr-2" : "text-3xl pl-4 pr-2"} 
            absolute top-1/2  bg-gray-950/70 rounded-full flex items-center z-20 cursor-pointer justify-center p-3 transition  duration-200
          hover:bg-gray-950/90 hover:scale-105`}
            onClick={handleClicktoLeft}
          >
            <MdArrowBackIos />
          </button>
        )}
      </div>
    </div>
  );
};

export default BookCarousel;
