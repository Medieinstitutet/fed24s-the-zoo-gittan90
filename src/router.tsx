import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./pages/Layout";
import OverviewPage from "./pages/OverviewPage";
import Animal from "./pages/Animal";
import Home from "./pages/Home";
import NotFound from "./pages/NotFound";
import React from "react";

const Router = () => (
  <BrowserRouter>
    <Routes>
      <Route path="/" element={<Layout />}>
        <Route index element={<Home />} />
        <Route path="Overview" element={<OverviewPage />} />
        <Route path="animal/:id" element={<Animal />} />
        <Route path="*" element={<NotFound />} />
      </Route>
    </Routes>
  </BrowserRouter>
);

export default Router;
