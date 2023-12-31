import { Navigate, Route, Routes } from "react-router-dom";
import Acceuil from "../pages/Acceuil";
import Layout from "../components/Layout/Layout";
import Admin from "../pages/Admin";
import PrivateRoutes from "../components/Private/PrivateRoutes";
import CommePage from "../pages/Commercial/CommePage";

const prime = import.meta.env.VITE_PRIME.split(" ");

const AppRouter = () => {
  return (
    <Routes>
      <Route element={<PrivateRoutes prime={prime[1]} />}>
        <Route path="/commercial/" element={<CommePage />} />
      </Route>
      <Route path="/" element={<Acceuil />} />
      <Route path="/page/*" element={<Layout />} />
      <Route element={<PrivateRoutes prime={prime[0]} />}>
        <Route path="/admin/*" element={<Admin />} />
      </Route>
      <Route path="*" element={<Navigate to={"/"} />} />
    </Routes>
  );
};

export default AppRouter;
