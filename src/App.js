import { useState } from "react";
import Cart from "./component/Cart/Cart";
import Header from "./component/Layout/Header";
import Meals from "./component/Meals/Meals";
import CardProvider from "./store/CardProvider";
import Card from "./component/UI/Card";
function App() {
  const [cartIsShown, setCartIsShown] = useState(false);

  const toggleCartHandler = () => {
    setCartIsShown((prev) => !prev);
  };

  return (
    <CardProvider>
      {cartIsShown && <Cart onToggleCart={toggleCartHandler} />}
      <Header onToggleCart={toggleCartHandler} />
      <main>
        <Meals />
      </main>
    </CardProvider>
  );
}

export default App;
