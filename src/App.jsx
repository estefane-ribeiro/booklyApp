import { useContext, useEffect, useState } from "react";
import BookCarousel from "./BookCarousel/BookCarousel";
import { SettingsContext } from "./Context/SettingsContext";
import { FetchContext } from "./Context/FetchContext";
import Aside from "./Aside/Aside";
import Header from "./Header/Header";
import Modal from "./Modal/Modal";

const categorias = ["romance", "science_fiction", "horror", "comics"];

function App() {
  const { menuCollapse, menuMobile } = useContext(SettingsContext);
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
      className={`grid ${menuMobile ? "grid-cols-[40px_1fr]" : ""} ${menuCollapse ? "grid-cols-[68px_1fr]" : "lg:grid-cols-[minmax(250px,1fr)_1fr]"} 
      `}
    >
      <Aside />
      <main
        className=" max-w-full *:text-white
       "
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
