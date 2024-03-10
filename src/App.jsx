import { Route, Routes } from "react-router-dom";

import Login from "./containers/Login";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Footer from "./components/Footer";
import { LOGIN } from "./constants/routesPath";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-[106px]">
        <Routes>
          <Route exact path="/" element={<Home />} />
          <Route path={LOGIN} element={<Login />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
