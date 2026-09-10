import { createContext, useEffect, useState } from "react";

const categorias = ["romance", "science_fiction", "horror", "comics"];

export const FetchContext = createContext();

export const FetchStorage = ({ children }) => {
  const [dados, setDados] = useState(null);
  const [book, setBook] = useState(null);
  const [dataBook, setDataBook] = useState(null);
  const [infoBook, setInfoBook] = useState(null);

  useEffect(() => {
    async function buscarDados() {
      try {
        const respostas = await Promise.all(
          categorias.map((categoria) => {
            return fetch(
              `https://openlibrary.org/subjects/${categoria}.json?limit=20`,
            );
          }),
        );
        console.log(respostas);
        const resultados = await Promise.all(
          respostas.map((resposta) => resposta.json()),
        );
        console.log(resultados);

        setDados(resultados);
      } catch (error) {
        console.log(error);
      }
    }

    buscarDados();
  }, []);

  function limparDados() {
    setDados(null);
  }

  useEffect(() => {
    try {
      async function dataBook() {
        if (book) {
          const response = await fetch(book);
          const json = await response.json();
          setDataBook(json);
        }
      }
      dataBook();
    } catch (error) {
      console.log("Erro em buscar detalhes sobre o livro: ", error);
    }
  }, [book]);

  return (
    <FetchContext.Provider
      value={{
        dados,
        limparDados,
        book,
        setBook,
        dataBook,
        infoBook,
        setInfoBook,
      }}
    >
      {children}
    </FetchContext.Provider>
  );
};
