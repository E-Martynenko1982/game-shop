import { Routes, Route } from "react-router-dom";
import { HomePage } from "./pages/home-page";
import { Header } from "./components/header";
import { Provider } from "react-redux";
import { store } from "./redux";
import { GamePage } from "./pages/game-page/game-page";
import { OrderPage } from "./pages/order-page/order-page";

function App() {
  return (
    <Provider store={store}>
      <div className="App">
        <Header />
        <Routes>
          <Route path="/" element={<HomePage />} />
          <Route path="/app/:title" element={<GamePage />} />
          <Route path="/order" element={<OrderPage />} />
        </Routes>
      </div>
    </Provider>
  );
}

export default App;
