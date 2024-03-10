import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";
import Footer from "./components/Footer";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-[106px]">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>
      <Footer />
    </>
  );
};

export default App;
