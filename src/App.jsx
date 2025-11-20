import { Routes, Route } from "react-router-dom";
import IpoDetails from "./Pages/IpoDetails.jsx";
import IPOList from "./Pages/IPOList.jsx";

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IPOList />} />
      <Route path="/ipo/:id" element={<IpoDetails />} />
    </Routes>
  );
}
