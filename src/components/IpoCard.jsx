import React from "react";
import { Link } from "react-router-dom";

function IPOCard({ ipo }) {
  return (
    <Link
      to={`/ipo/${ipo.id}`}
      className="bg-white shadow rounded-lg p-4 sm:p-6 hover:shadow-md transition"
    >
      <h2 className="text-lg sm:text-xl font-semibold">{ipo.name}</h2>
      <p className="text-gray-600 text-sm sm:text-base">Date: {ipo.date}</p>
      <p className="text-gray-600 text-sm sm:text-base">Lots: {ipo.lots}</p>
    </Link>
  );
}

export default IPOCard;
