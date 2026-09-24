import { useContext, useEffect, useState } from "react";
import BookCarousel from "./BookCarousel/BookCarousel";
import { SettingsContext } from "./Context/SettingsContext";
import { FetchContext } from "./Context/FetchContext";
import Aside from "./Aside/Aside";
import Header from "./Header/Header";
import Modal from "./Modal/Modal";

const categorias = ["romance", "science_fiction", "horror", "comics"];

function App() {
  const { menuCollapse, menuMobile, openMenu } = useContext(SettingsContext);
  const { dados, book } = useContext(FetchContext);
  const [modal, setModal] = useState(false);

  useEffect(() => {
    if (book) setModal(true);
  }, [book]);

  if (!dados) {
    return <h1>Carregando</h1>;
  }

  return (
    <div
      className={`grid ${menuMobile ? "grid-cols-1" : ""} ${menuCollapse ? "md:grid-cols-[68px_1fr]" : "lg:grid-cols-[minmax(250px,300px)_4fr]"} 
      `}
    >
      <Aside />
      <main
        className={`${openMenu ? "blur-md" : "blur-none "} max-md:col-start-1 max-md:row-start-1 max-md:px-4 max-md:z-20 max-w-full *:text-white overflow-x-hidden`}
      >
        <Header />
        {/* <Livro /> */}
        {categorias.map((categoria, index) => (
          <BookCarousel key={categoria} dados={dados[index]} />
        ))}
      </main>
      {modal && <Modal setModal={setModal} />}
    </div>
  );
}

export default App;
