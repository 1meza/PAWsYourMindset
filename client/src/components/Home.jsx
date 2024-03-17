import React from "react";

const Home = () => {
    return (
        <div className="fixed inset-0 flex items-center justify-center bg-orange-200">
            <div className="cursor-default flex flex-col gap-3 rounded-md p-3">
                <button className="px-64 py-32 bg-cyan-600 text-white rounded-md shadow-md hover:bg-blue-600">
                     Start
                </button>
            </div>
        </div>
    );
}

export default Home;