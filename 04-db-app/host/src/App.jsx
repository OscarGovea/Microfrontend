import React, { lazy, Suspense } from "react";
import ReactDOM from "react-dom";
import { BrowserRouter, Routes, Route, Navigate } from "react-router-dom";

import "./index.scss";
import NotFound from "./pages/NotFound";
import Navbar from "mf_navbar/Navbar";
import Loader from "./components/Loader";

const HomePage = lazy(() => import("./pages/HomePage"));
const AboutPage = lazy(() => import("./pages/AboutPage"));
const PersonajesPage = lazy(() => import("./pages/PersonajesPage"));
const DetallePersonajePage = lazy(() => import("./pages/DetallePersonajePage"));

const App = () => (
  <BrowserRouter>
    <Navbar />

    <div className="mx-10 mt-10">
      <Routes>
        <Route
          path="/"
          element={
            <Suspense fallback={<Loader />}>
              <HomePage />
            </Suspense>
          }
        />
        <Route
          path="/personajes"
          element={
            <Suspense fallback={<Loader />}>
              <PersonajesPage />
            </Suspense>
          }
        />
        <Route
          path="/about"
          element={
            <Suspense fallback={<Loader />}>
              <AboutPage />
            </Suspense>
          }
        />
        <Route
          path="/personajes/:id"
          element={
            <Suspense fallback={<Loader />}>
              <DetallePersonajePage />
            </Suspense>
          }
        />
        <Route path="*" element={<NotFound />} />
        {/* <Route path="*" element={<Navigate to="/"/>} /> */}
      </Routes>
    </div>
  </BrowserRouter>
);
ReactDOM.render(<App />, document.getElementById("app"));
