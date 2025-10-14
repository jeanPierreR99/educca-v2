import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Gallery from "./page/Gallery";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Layout />} /> {/* / */}
          <Route path="gallery" element={<Gallery />} /> {/* /gallery */}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
