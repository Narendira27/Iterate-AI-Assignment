import { BrowserRouter, Route, Routes } from "react-router-dom";
import { BookPuja, Home, PujaDetails, YourPuja } from "./pages";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<Home />} />
        <Route path="/yourpuja" element={<YourPuja />} />
        <Route path="/bookpuja" element={<BookPuja />} />
        <Route path="/pujadetails" element={<PujaDetails />} />
      </Routes>
    </BrowserRouter>
  );
}

export default App;
