import { Routes, Route } from "react-router-dom";
import IPOList from "./Pages/IPOList";
import IPODetails from "./Pages/IpoDetails"; 

export default function App() {
  return (
    <Routes>
      <Route path="/" element={<IPOList />} />
      <Route path="/ipo/:id" element={<IPODetails />} />
    </Routes>
  );
}
