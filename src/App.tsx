import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout/Layout";
import Gallery from "./page/Gallery";
import Comunications from "./page/Comunications";
import Notice from "./page/Notice";

const App = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/">
          <Route index element={<Layout />} /> {/* / */}
          <Route path="gallery" element={<Gallery />} /> {/* /gallery */}
          <Route path="comunications" element={<Comunications />} />{" "}
          <Route path="notices" element={<Notice />} />{" "}
        </Route>
      </Routes>
    </BrowserRouter>
  );
};

export default App;
