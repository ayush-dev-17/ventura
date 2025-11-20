import React, { useContext } from "react";
import { Link } from "react-router-dom";
import { IPOContext } from "../context/IpoContext";

export default function IPOList() {
  const { ipoData } = useContext(IPOContext);

  return (
    <div className="min-h-screen bg-white p-4 sm:p-8 font-sora">
      <h1 className="text-2xl font-bold mb-6">IPO List</h1>

      <div className="bg-gray-100 rounded-xl shadow overflow-x-auto">
        <table className="w-full text-sm sm:text-base min-w-[600px]">
          <thead className="bg-gray-200 text-left text-gray-600">
            <tr>
              <th className="p-4">Company / Issue date</th>
              <th className="p-4">Issue size</th>
              <th className="p-4">Price range</th>
              <th className="p-4">Min invest/qty</th>
            </tr>
          </thead>

          <tbody>
            {ipoData.map((ipo) => (
              <tr key={ipo.id} className="border-b hover:bg-gray-50">
                <td className="p-4">
                  <Link
                    to={`/ipo/${ipo.id}`}
                    className="flex items-center gap-3"
                  >
                    <img
                      src={ipo.logo}
                      alt={ipo.company}
                      className="w-10 h-10 rounded-full flex-shrink-0"
                    />
                    <div>
                      <p className="font-semibold">{ipo.company}</p>
                      <p className="text-gray-600 text-sm">{ipo.issueDates}</p>
                    </div>
                  </Link>
                </td>

                <td className="p-4">{ipo.issueSize}</td>
                <td className="p-4">{ipo.priceRange}</td>

                <td className="p-4">
                  {ipo.minAmount}
                  <p className="text-gray-600 text-sm">{ipo.lotSize}</p>
                </td>
              </tr> 
            ))}
          </tbody>
        </table>
      </div>
    </div>
  );
}
