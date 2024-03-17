import React from "react";
import { Link } from 'react-router-dom';

import BrainFixed from "../assets/brainfixed.svg";
import BrainGrowth from "../assets/braingrow.svg";

const Versus = () => {
    return (
    <div>
    <div className="fixed inset-0 flex flex-col items-center justify-center  bg-blue-900">
      <img src="../assets/pawhacks.png" alt="Logo" className="absolute top-0 left-0 m-4 h-10" />
      <div className="flex justify-between w-full px-4 absolute top-0">
        <div class="mx-auto flex items-center justify-center gap-10 px-6 py-5">
          <Link to="/">
            <ul class="bg-white border-gray-900 hover:border-zinc-300 hover:bg-gray-900 group flex-1 -skew-x-[30deg] transform border">
              <li class="m-4 skew-x-[30deg] transform bg-transparent px-9 text-center first-letter:uppercase">
                <b class="block text-lg group-hover:text-white">Home</b>
              </li>
            </ul>
          </Link>  

          <Link to="/Versus">     
            <ul class="bg-white border-gray-900 hover:border-zinc-300 hover:bg-gray-900 group flex-1 -skew-x-[30deg] transform border">
              <li class="m-4 skew-x-[30deg] transform bg-transparent px-9 text-center first-letter:uppercase">
                <b class="block text-lg group-hover:text-white">Fixed vs Growth</b>
              </li>
            </ul>
          </Link>
 
          <Link to="/Team">
            <ul class="bg-white border-gray-900 hover:border-zinc-300 hover:bg-gray-900 group flex-1 -skew-x-[30deg] transform border">
              <li class="m-4 skew-x-[30deg] transform bg-transparent px-9 text-center first-letter:uppercase">
                <b class="block text-lg group-hover:text-white">Team</b>
              </li>
            </ul>
          </Link>
        </div>
      </div>

      {/* Brain SVGs with VS label */}
      <div className="flex justify-center items-center gap-20">
                {/* Fixed Mindset Card */}
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex flex-col items-center justify-center">
                        <img src={BrainFixed} alt="Fixed Mindset" className="h-40 w-40" />
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Fixed Mindset</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                        <li>Accountability</li>
                        <li>Learning</li>
                        <li>Persistence</li>
                        <li>Ownership</li>
                        <li>Internally driven</li>
                      </ul>
                        </p>
                    </div>
                </a>

                {/* VS Label */}
                <div className="text-center text-4xl font-bold text-white">
                    VS
                </div>

                {/* Growth Mindset Card */}
                <a href="#" className="block max-w-sm p-6 bg-white border border-gray-200 rounded-lg shadow-md hover:bg-gray-100 dark:bg-gray-800 dark:border-gray-700 dark:hover:bg-gray-700">
                    <div className="flex flex-col items-center justify-center">
                        <img src={BrainGrowth} alt="Growth Mindset" className="h-40 w-40" />
                        <h5 className="mb-2 text-2xl font-bold tracking-tight text-gray-900 dark:text-white">Growth Mindset</h5>
                        <p className="font-normal text-gray-700 dark:text-gray-400">
                        <ul>
                        <li>Complaints</li>
                        <li>Blame</li>
                        <li>Gives Up</li>
                        <li>Excuses</li>
                        <li>Externally driven</li>
                      </ul>
                        </p>
                    </div>
                </a>
            </div>
    </div>
    </div>
    

    );
}

export default Versus;