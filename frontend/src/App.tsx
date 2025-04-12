import "./styles/App.css";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import Landing from "./pages/Landing";
import About from "./pages/About";
import Advocacy from "./pages/Advocacy";
import Docs from "./pages/Docs";
import Membership from "./pages/Membership";
import Donate from "./pages/Donate";
import Media from "./pages/Media";
import NotFoundPage from "./pages/NotFoundPage";

const App = () => {
  return (
    <>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<Layout />}>
            <Route index element={<Landing />} />
            <Route path="landing" element={<Landing />} />
            <Route path="about" element={<About />} />
            <Route path="advocacy" element={<Advocacy />} />
            <Route path="docs" element={<Docs />} />
            <Route path="membership" element={<Membership />} />
            <Route path="media" element={<Media />} />
            <Route path="donate" element={<Donate />} />
          </Route>
          <Route path="*" element={<NotFoundPage />} />
        </Routes>
      </BrowserRouter>
    </>
  );
};

export default App;
