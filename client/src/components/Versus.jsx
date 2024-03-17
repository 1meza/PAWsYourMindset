import React from "react";
import { Link } from 'react-router-dom';

import BrainFixed from "../assets/brainfixed.svg";
import BrainGrowth from "../assets/braingrow.svg";

const Versus = () => {
    return (
    <div>
    <div className="fixed inset-0 flex flex-col items-center justify-center bg-orange-200">
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

      {/* Brain SVGs with labels */}
      <div className="flex justify-center items-center gap-10">
                <div className="text-center">
                <div className="mb-2 text-large">Fixed</div> {/* Label below the brain */}
                    <img src={BrainFixed} alt="Fixed Mindset" className="h-80 w-80" /> {/* Increased size */}
                    
                </div>
                <div className="text-center">
                <div className="mb-2 text-lg">Growth</div> {/* Label below the brain */}
                    <img src={BrainGrowth} alt="Growth Mindset" className="h-80 w-80" /> {/* Increased size */}
                </div>
      </div>
    </div>
    </div>
    

    );
}

export default Versus;