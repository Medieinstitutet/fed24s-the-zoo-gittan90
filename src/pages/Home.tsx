import React from "react";
import { Link } from "react-router-dom";

const Home = () => {
  return (
    <div className="min-h-screen flex flex-col items-center justify-center text-center p-6 text-gray-700">
      <h1 className="text-4xl font-bold mb-4">Välkommen till Anna's Zoo</h1>
      <p className="text-lg text-gray-700">
        Här kan du utforska djuren vi har på vårt zoo
      </p>
      <Link to="/Overview">
        <button className="bg-[#8B4513] text-white p-3 rounded mt-3">
          Utforska djuren
        </button>
      </Link>
    </div>
  );
};

export default Home;
