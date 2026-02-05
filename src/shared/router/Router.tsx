import { BrowserRouter, Route, Routes } from "react-router-dom";

import NotFoundPage from "../pages/not-found-page";
import { ROUTES } from "../constants/routes";

const Router = () => {
  return (
    <BrowserRouter>
      <Routes>
        <Route path={ROUTES.HOME} element={<div>Home Page</div>} />
        <Route path="*" element={<NotFoundPage />} />
      </Routes>
    </BrowserRouter>
  );
};

export default Router;
