import { BrowserRouter, Routes, Route } from "react-router-dom";

import LoginPage from "../pages/LoginPage";
import DashboardPage from "../pages/DashboardPage";
import DangKyPage from "../pages/DangKyPage";
import ThoiKhoaBieuPage from "../pages/ThoiKhoaBieuPage";

function AppRoutes() {
  return (
    <BrowserRouter>
      <Routes>
        <Route path="/" element={<LoginPage />} />

        <Route path="/dashboard" element={<DashboardPage />} />

        <Route path="/dang-ky" element={<DangKyPage />} />

        <Route
          path="/thoi-khoa-bieu"
          element={<ThoiKhoaBieuPage />}
        />
      </Routes>
    </BrowserRouter>
  );
}

export default AppRoutes;