import { BrowserRouter, Route, Routes } from "react-router-dom";
import Research from "./Research/research";
import View from "./Research/view";


export default function App() {
  return (
    <BrowserRouter>
      <Routes>
          <Route path="/Research" element={<Research />}></Route>
          <Route path="/Research/view" element={}></Route>
      </Routes>
    </BrowserRouter>
  )
}