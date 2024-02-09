import { BrowserRouter, Route, Routes } from "react-router-dom";
import Research from "./Research/research";
import BioSci from "./Research/bioSci";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/Research" element={<Research />}></Route>
          <Route path="/Research/BioScience" element={<BioSci />} ></Route>
      </Routes>
    </BrowserRouter>
  )
}