import { useContext } from "react";
import { FetchContext } from "../Context/FetchContext";
import { MdFavorite, MdClose } from "react-icons/md";

const Modal = ({ setModal }) => {
  const { dataBook, infoBook } = useContext(FetchContext);

  function handleClickOutsideModal(event) {
    if (event.target == event.currentTarget) {
      closedModal();
    }
  }
  const closedModal = () => setModal(false);
  return (
    <div
      className="absolute z-30 overflow-auto bg-black/50 text-white p-8 size-full m-auto flex items-center justify-center *:tracking-wider"
      onClick={handleClickOutsideModal}
    >
      <div className="bg-[#240B5C] p-8 rounded-2xl md:w-[80%] flex flex-col justify-center  gap-3 relative">
        <div className="flex">
          <img className="rounded-md" src={infoBook.cover} alt="" />
          <div className="ml-8 mt-5 space-y-4">
            <h2 className="text-2xl lg:text-4xl font-bold">
              {dataBook?.title}
            </h2>
            <h3 className="">
              <span className="font-black">Autor(a): </span>
              {infoBook.autor}
            </h3>
            <p>
              <span className="font-black">Números de edições:</span>{" "}
              {infoBook?.edicoes}
            </p>
            <p>
              <span className="font-black">Primeira publicação:</span>{" "}
              {infoBook?.publicacao}
            </p>
            <button
              className="bg-linear-to-r from-blue-950 to-blue-700 hover:from-blue-500 hover:to-blue-950 
                    transition duration-200 cursor-pointer px-4 py-2 rounded-md flex items-center gap-2"
            >
              <MdFavorite />
              Adicionar na biblioteca
            </button>
          </div>
        </div>
        <p className="font-black">Description</p>
        <p>
          {" "}
          {typeof dataBook?.description == "object"
            ? dataBook?.description?.value
            : dataBook?.description}
        </p>

        <p className="font-black">Genêros</p>
        <ul className="grid grid-cols-2 list-disc ml-4 gap-2">
          {[0, 1, 2, 3, 4, 5].map(
            (i) =>
              infoBook?.generos?.[i] && (
                <li key={i}>{infoBook?.generos?.[i]}</li>
              ),
          )}
        </ul>
        {dataBook?.links && <p className="font-black">Links úteis</p>}
        <ul className="grid grid-cols-2 list-disc ml-4 gap-2">
          {dataBook?.links?.map((link) => (
            <li key={link.title}>
              <a
                className="underline underline-offset-5 hover:text-blue-600"
                href={link.url}
              >
                {link.title}
              </a>
            </li>
          ))}
        </ul>
        <div className="flex justify-center gap-8">
          <button
            className="bg-linear-to-b from-blue-900 to-blue-700 hover:from-blue-500 hover:to-blue-950 transition duration-200 cursor-pointer px-4 py-2 rounded-md"
            onClick={() => setModal(false)}
          >
            Ver detalhes
          </button>
          <button
            className="bg-linear-to-b from-red-950 to-red-700 hover:from-red-500 hover:to-red-950 transition duration-200 cursor-pointer px-4 py-2 rounded-md"
            onClick={closedModal}
          >
            Fechar
          </button>
          <button
            className="bg-transparent hover:bg-red-700 transition duration-200 cursor-pointer p-3 
                      absolute top-0 right-0"
            onClick={closedModal}
          >
            <MdClose />
          </button>
        </div>
      </div>
    </div>
  );
};

export default Modal;
