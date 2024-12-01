import { Route, Routes } from "react-router-dom";
import { Sidebar } from "./components/SIdebar/Sidebar";
import { NavBar } from "./components/NavBar/NavBar";
import { Add } from "./pages/Add/Add";
import { Orders } from "./pages/Orders/Orders";
import { List } from "./pages/List/List";

export const App = () => {
  return (
    <div>
      <NavBar />
      <hr/>
      <div className="app-content">
        <Sidebar />
        <Routes>
          <Route path="/add" element={<Add />} />
          <Route path="/list" element={<List />} />
          <Route path="/orders" element={<Orders />} />
        </Routes>
      </div>
    </div>
  );
};
