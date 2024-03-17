import React from "react";
import { Link } from 'react-router-dom'
import { AwesomeButton } from "react-awesome-button";

const Home = () => {
    return (
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-orange-200">
      <div className="flex justify-between w-full px-4 absolute top-0">
        <Link className="relative inline-block text-4xl group" to="/SomeRoute">
          Sauce
        </Link>
        <Link className="relative inline-block text-4xl group" to="/AnotherRoute">
          About
        </Link>
        <Link className="relative inline-block text-4xl group" to="/FourthRoute">
          Team
        </Link>
      </div>

      {/* First Button */}
      <div className="cursor-default flex flex-col gap-3 rounded-md p-3">
        <Link className="relative inline-block text-4xl group" to="/Questions">
          <span className="relative z-10 block px-16 py-8 overflow-hidden font-medium leading-tight text-gray-800 transition-colors duration-300 ease-out border-4 border-gray-900 rounded-lg group-hover:text-white">
            <span className="absolute inset-0 w-full h-full px-16 py-8 rounded-lg bg-gray-50"></span>
            <span className="absolute left-0 w-128 h-128 -ml-8 transition-all duration-300 origin-top-right -rotate-90 -translate-x-full translate-y-32 bg-gray-900 group-hover:-rotate-180 ease"></span>
            <span className="relative">START TEST!</span>
          </span>
          <span className="absolute bottom-0 right-0 w-full h-24 -mb-2 -mr-2 transition-all duration-200 ease-linear bg-gray-900 rounded-lg group-hover:mb-0 group-hover:mr-0" data-rounded="rounded-lg"></span>
        </Link>
      </div>
    </div>
    );
}

export default Home;

