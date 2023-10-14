import { Routes, Route } from "react-router-dom";
import ErrorPage from "./pages/ErrorPage";
import MainPage from "./pages/MainPage";
import OthersPage from "./pages/OthersPage";
import "./i18n";

const App = () => (
  <>
    <Routes>
      <Route exact path="/" element={<MainPage />} />
      <Route path="/OlgaWebsite" element={<MainPage />} />
      <Route path="/others" element={<OthersPage />} />
      <Route path="*" element={<ErrorPage />} />
    </Routes>
  </>
);

export default App;
