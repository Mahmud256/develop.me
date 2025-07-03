import { FaHtml5, FaJs, FaGlobe } from 'react-icons/fa';

const Third = () => {
    return (
        <div className="card bg-black text-white mx-4">
            <div className="card-body">
                {/* Top Section */}
                <div className='left-0 translate-y-1/2 flex items-center mb-6'>
                    <button className="btn btn-circle bg-black border border-[#e5e5e5] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <button className="btn rounded-full bg-black border border-[#e5e5e5] px-6 text-white">
                        Why Choose Me
                    </button>
                </div>

                {/* Middle Section */}
                <div className="flex flex-col md:flex-row justify-between items-start md:items-center mb-10">
                    {/* Left Title */}
                    <div className="title mb-6 md:mb-0 text-left">
                        <h1 className="text-5xl font-bold">My Extensive</h1>
                        <h1 className="text-5xl font-bold">List of Skills</h1>
                    </div>

                    {/* Right Side Description and Buttons */}
                    <div className="right-side text-right max-w-xl">
                        <p className="text-lg font-medium mb-4">
                            Building the world’s best marketing your
                            <br />trusted partner for strategy, design, and development.
                        </p>

                        <div className="flex justify-end gap-2 border-t border-gray-700 pt-6">
                            <button className="btn btn-circle border border-white">
                                {/* Left Arrow Icon */}
                                <svg aria-label="Left arrow icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24">
                                    <path d="M19 12H5m6 6l-6-6 6-6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/>
                                </svg>
                            </button>
                            <button className="btn btn-circle border border-white">
                                {/* Right Arrow Icon */}
                                <svg aria-label="Right arrow icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    
                            </button>
                        </div>
                    </div>
                </div>

                {/* Card Section */}
                <div className='three-card flex flex-col md:flex-row gap-6 p-6 rounded-lg'>
                    {/* Card 1 */}
                    <div className="card w-full md:w-96 bg-neutral text-white shadow-sm border border-gray-700">
                        <div className="card-body flex flex-col items-center text-center">
                            <FaHtml5 size={40} className="mb-2 text-orange-500" />
                            <h2 className="card-title">HTML & CSS</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        </div>
                    </div>

                    {/* Card 2 */}
                    <div className="card w-full md:w-96 bg-neutral text-white shadow-sm border border-gray-700">
                        <div className="card-body flex flex-col items-center text-center">
                            <FaJs size={40} className="mb-2 text-yellow-400" />
                            <h2 className="card-title">Javascript</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        </div>
                    </div>

                    {/* Card 3 */}
                    <div className="card w-full md:w-96 bg-neutral text-white shadow-sm border border-gray-700">
                        <div className="card-body flex flex-col items-center text-center">
                            <FaGlobe size={40} className="mb-2 text-blue-400" />
                            <h2 className="card-title">Webflow</h2>
                            <p>A card component has a figure, a body part, and inside body there are title and actions parts</p>
                        </div>
                    </div>
                </div>

            </div>
        </div>
    );
};

export default Third;
