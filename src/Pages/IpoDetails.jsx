import React, { useContext } from "react";
import { useParams, Link } from "react-router-dom";
import { IPOContext } from "../context/IpoContext";

import { BsCheck } from "react-icons/bs";
import { HiOutlineArrowLeft } from "react-icons/hi";

export default function IPODetails() {
  const { id } = useParams();
  const { ipoData } = useContext(IPOContext);

  const ipo = ipoData.find((item) => item.id === parseInt(id));
  if (!ipo) return <p className="p-6">IPO not found</p>;

  return (
    <div className="min-h-screen bg-gray-50 p-4 sm:p-8 font-sora">
      {/* Breadcrumb */}
      <div className="text-sm text-gray-500 mb-4">
        <Link to="/" className="hover:underline text-blue-600">
          Home
        </Link>{" "}
        &gt; Market watch
      </div>

      {/* Header */}
      <div className="bg-white p-4 sm:p-5 rounded-xl shadow mb-6 flex flex-col sm:flex-row sm:justify-between sm:items-center gap-4">
        <div className="flex items-center gap-3 sm:gap-4">
          <Link to="/">
            <button className="p-2 rounded-full border shadow-sm">
              <HiOutlineArrowLeft className="text-xl" />
            </button>
          </Link>

          <img
            src={ipo.logo}
            className="w-12 h-12 rounded-full"
            alt={ipo.company}
          />

          <div>
            <h1 className="text-xl sm:text-2xl font-bold">{ipo.company}</h1>
            <p className="text-gray-600 text-sm sm:text-base">{ipo.fullName}</p>
          </div>
        </div>

        <button className="bg-indigo-600 text-white px-5 py-2 rounded-lg shadow hover:bg-indigo-700 w-full sm:w-auto">
          Apply now
        </button>
      </div>

      {/* IPO Details */}
      <div className="bg-white p-6 rounded-xl shadow mb-6 grid grid-cols-1 sm:grid-cols-2 gap-4">
        <Detail label="Issue size" value={ipo.issueSize} />
        <Detail label="Price range" value={ipo.priceRange} />
        <Detail label="Minimum amount" value={ipo.minAmount} />
        <Detail label="Lot size" value={ipo.lotSize} />
        <Detail label="Issue dates" value={ipo.issueDates} />
        <Detail label="Listed on" value={ipo.listedOn} />
        <Detail label="Listed price" value={ipo.listedPrice} />
        <Detail label="Listing gains" value={ipo.listingGains} />
      </div>

      {/* IPO Timeline */}
      <div className="bg-white p-6 rounded-xl shadow mb-6">
        <h2 className="text-lg font-semibold mb-6">IPO timeline</h2>

        <div className="relative overflow-x-auto pb-4">
          <div className="absolute top-6 left-0 w-full h-0.5 bg-gray-300"></div>

          <div className="flex justify-between text-center min-w-[700px]">
            {[
              ["Bidding starts", ipo.timeline.biddingStart],
              ["Bidding ends", ipo.timeline.biddingEnd],
              ["Allotment finalization", ipo.timeline.allotment],
              ["Refund initiation", ipo.timeline.refund],
              ["Demat transfer", ipo.timeline.demat],
              ["Listing date", ipo.timeline.listing],
            ].map(([label, date], index) => (
              <div key={index} className="flex flex-col items-center w-1/6">
                <div className="w-9 h-9 bg-green-500 rounded-full flex items-center justify-center border-4 border-white shadow z-10">
                  <BsCheck className="text-white w-5 h-5" />
                </div>

                <p className="mt-3 font-semibold text-sm text-gray-900">
                  {label}
                </p>
                <p className="text-gray-600 text-xs">{date}</p>
              </div>
            ))}
          </div>
        </div>
      </div>

      <div className="bg-white p-6 rounded-xl shadow">
        <h2 className="text-lg font-semibold mb-2">About the company</h2>
        <p className="text-gray-700 text-sm leading-6">{ipo.description}</p>
      </div>
    </div>
  );
}

function Detail({ label, value }) {
  return (
    <p className="text-gray-700 text-sm sm:text-base">
      <span className="font-semibold">{label}: </span> {value}
    </p>
  );
}
