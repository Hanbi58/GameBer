import HeaderMain from "./components/Header/HeaderMain";
import GameDisplayCC from "./components/Body/GameDisplayCC";
import Cart from "./components/Modal/Cart";
import { useState } from "react";
import CartContextProvide from "./components/store/CartContextProvide";
import Footer from "./components/Footer/Footer";
function App() {
  const [showModal, setShowModal] = useState(false);
  const toggleShowModal = () => {
    setShowModal((prevState) => !prevState);
  };
  return (
    <>
      <CartContextProvide>
        {showModal ? <Cart toggleShowModal={toggleShowModal} /> : ""}

        <HeaderMain toggleShowModal={toggleShowModal} />
        <GameDisplayCC />
      </CartContextProvide>
      <Footer />
    </>
  );
}

export default App;

// Header -> Title  +  Cart (Modal Hidden)
//Body -> Summary  +  Shopping list
