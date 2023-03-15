import { Route,  BrowserRouter as Router, Routes } from "react-router-dom";
import MainLayout from "./layout/MainLayout";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";

const BrowserRouter = (): JSX.Element => {
  return (
    <Router>
      <Routes>
        <Route  element={<MainLayout />}>
          <Route path="/" element={<Home />} />
          <Route path="*" element={<NotFound />} />
        </Route>
      </Routes>
    </Router>
  );
};

export default BrowserRouter;
