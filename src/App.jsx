import { Route, Routes } from "react-router-dom";
import Navbar from "./components/Navbar";
import Home from "./containers/Home";

const App = () => {
  return (
    <>
      <Navbar />
      <main className="pt-[106px]">
        <Routes>
          <Route exact path="/" element={<Home />} />
        </Routes>
      </main>
    </>
  );
};

export default App;
