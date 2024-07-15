import React from "react";
import Navbar from './components/navbar/NavBar.jsx';
import Greeting from './components/main/Greeting.jsx';
import { Routes, Route } from "react-router-dom";
import ItemListContainer from "./components/itemList/ItemListContainer";
import ItemDetailContainer from "./components/itemDetail/ItemDetailContainer";
import Error from "./components/error/Error";



export default function App() {
  return (
    <>
      <Navbar />
      <main>
        <div className="container-fluid py-2 justify-content-end">
          <div id="publicaciones" className="row">
            <Greeting titulo1="Bienvenido a Toy-Toy-Shop!!" titulo2="La mejor juguetería del condado!" />
            <Routes>
              <Route path="/" element={<ItemListContainer />} />
              <Route path="/category/:clase" element={<ItemListContainer />} />
              <Route path="/item/:id" element={<ItemDetailContainer />} />
              <Route path="/404.html" element={<Error />} />
              <Route path="/category/:clase/404.html" element={<Error />} />
              <Route path="/category/404.html" element={<Error />} />
              <Route path="/item/:id/404.html" element={<Error />} />
              </Routes>
          </div>
        </div>
      </main>
    </>
  );
}


