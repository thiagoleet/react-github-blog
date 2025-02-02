import { Route, Routes } from "react-router-dom";
import DefaultLayout from "./layouts/DefaultLayout";
import HomePage from "./pages/Home";

export default function Router() {
  return (
    <Routes>
      <Route
        path="/"
        element={<DefaultLayout />}
      >
        <Route
          index
          element={<HomePage />}
        />
      </Route>
    </Routes>
  );
}
