import logo from './logo.svg';

import { Route, Routes } from "react-router-dom";
import Firs from "../src/pages/firs/Firs";
import Archieve from "../src/pages/archieve/Archieve";
import Navbar from "./component/layout/Navbar";


function App() {
  return (
    <>
      <Navbar />

      <Routes>
        <Route path="/firs" element={<Firs />} />

        <Route path="/archieve" element={<Archieve />} />

      </Routes>



    </>
  );
}

export default App;
