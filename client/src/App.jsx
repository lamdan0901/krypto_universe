import { React } from "react";
import { Provider } from "react-redux";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import { Navbar, Footer } from "./components";
import {
  Cryptocurrencies,
  CryptoDetails,
  News,
  Home,
} from "./pages";
import store from "./app/store";

// import "antd/dist/antd.css";
import "antd/dist/antd.dark.css";
import "./App.css";

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Navbar />
        <Routes>
          <Route path="/" element={<Home />} />
          <Route
            path="/cryptocurrencies"
            element={<Cryptocurrencies />}
          />
          <Route path="/crypto/:coinId" element={<CryptoDetails />} />
          <Route path="/news" element={<News />} />
        </Routes>
        <Footer />
      </BrowserRouter>
    </Provider>
  );
}

export default App;
