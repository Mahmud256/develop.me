import React from 'react';

const Forth = () => {
    return (
        <div className="px-6  text-black">
            {/* Top Section - Top Right */}
            <div className="flex justify-end mb-10">
                <div className="left-0 translate-y-1/2 flex items-center">
                    <button className="btn btn-circle bg-black border border-[#e5e5e5] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <button className="btn rounded-full bg-black border border-[#e5e5e5] px-6 text-white">
                        About
                    </button>
                </div>
            </div>

            {/* Title Section - Centered */}
            <div className="text-center mb-12">
                <h2 className="text-4xl font-bold mb-2">I’ve been <span className="bg-black text-white px-2">Developing</span></h2>
                <h2 className="text-4xl font-bold mb-4">Websites since <span className="bg-black text-white px-2">2013</span></h2>
                <p className="text-lg max-w-2xl mx-auto text-gray-600">
                    We start every new client interaction with an in-depth discovery call where we get to know each other and recommend the best course of action.
                </p>
            </div>

            {/* Flex Section - Left and Right */}
            <div className="flex flex-col md:flex-row justify-between items-start gap-6">
                {/* Left Side */}
                <div className="md:w-1/3">
                    <h2 className="text-2xl font-semibold mb-2">PREVIOUSLY</h2>
                    <h2 className="text-2xl font-semibold">WORKED ON</h2>
                </div>

                {/* Right Side */}
                <div className="flex flex-wrap justify-center gap-4">
                    {[
                        "awwwards.",
                        "facebook",
                        "CSS WINNER",
                        "/thoughtworks",
                        "AUTODESK",
                        "CSS Design Awards",
                    ].map((name, i) => (
                        <div
                            key={i}
                            className="bg-white border border-gray-300 px-4 py-2 rounded-full shadow-sm text-sm font-medium text-gray-800"
                        >
                            {name}
                        </div>
                    ))}
                </div>
            </div>
        </div>
    );
};

export default Forth;
