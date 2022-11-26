import "./App.css";
import Navigator from "./Navigator/Navigator";
import { CartProvider } from "react-use-cart";

function App() {
  return (
    <div className="App">
      <CartProvider>
        <Navigator />
      </CartProvider>
    </div>
  );
}

export default App;
