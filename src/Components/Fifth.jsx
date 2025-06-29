import { HiArrowRight } from 'react-icons/hi';

const Fifth = () => {
    return (
        <div className="card bg-black text-white">
            <div className="card-body">
                {/* Top Section */}
                <div className="mb-10 relative">
                    {/* Buttons on the left */}
                    <div className="absolute left-0 top-1/2 -translate-y-1/2 flex items-center">
                        <button className="btn btn-circle bg-black border border-[#e5e5e5] text-white">
                            <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                            </svg>
                        </button>
                        <button className="btn rounded-full bg-black border border-[#e5e5e5] px-6 text-white">
                            Work Process
                        </button>
                    </div>

                    {/* Centered Heading */}
                    <h1 className="text-5xl font-bold text-center">My Work Process</h1>
                </div>


                {/* Card Section */}
                <div className="three-card flex flex-col md:flex-row justify-center items-center gap-6 p-6 rounded-lg">
                    <div className="flex flex-col gap-6">
                        {/* Card 1 */}
                        <div className="card w-full md:w-96 bg-neutral text-white shadow-sm border border-gray-700">
                            <div className="card-body text-center">
                                <div className="flex justify-between items-center w-full">
                                    <button className="btn rounded-full bg-black border border-[#e5e5e5] px-6 text-white">Discovery</button>
                                    <div className="flex items-center gap-1 underline text-sm cursor-pointer">
                                        Read More <HiArrowRight />
                                    </div>
                                </div>
                                <p className="mt-4">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            </div>
                        </div>

                        {/* Card 2 */}
                        <div className="card w-full md:w-96 bg-neutral text-white shadow-sm border border-gray-700">
                            <div className="card-body text-center">
                                <div className="flex justify-between items-center w-full">
                                    <button className="btn rounded-full bg-black border border-[#e5e5e5] px-6 text-white">Strategy</button>
                                    <div className="flex items-center gap-1 underline text-sm cursor-pointer">
                                        Read More <HiArrowRight />
                                    </div>
                                </div>
                                <p className="mt-4">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            </div>
                        </div>
                    </div>

                    <div className="flex flex-col gap-6">
                        {/* Card 3 */}
                        <div className="card w-full md:w-96 bg-neutral text-white shadow-sm border border-gray-700">
                            <div className="card-body text-center">
                                <div className="flex justify-between items-center w-full">
                                    <button className="btn rounded-full bg-black border border-[#e5e5e5] px-6 text-white">Design</button>
                                    <div className="flex items-center gap-1 underline text-sm cursor-pointer">
                                        Read More <HiArrowRight />
                                    </div>
                                </div>
                                <p className="mt-4">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            </div>
                        </div>

                        {/* Card 4 */}
                        <div className="card w-full md:w-96 bg-neutral text-white shadow-sm border border-gray-700">
                            <div className="card-body text-center">
                                <div className="flex justify-between items-center w-full">
                                    <button className="btn rounded-full bg-black border border-[#e5e5e5] px-6 text-white">Build</button>
                                    <div className="flex items-center gap-1 underline text-sm cursor-pointer">
                                        Read More <HiArrowRight />
                                    </div>
                                </div>
                                <p className="mt-4">A card component has a figure, a body part, and inside body there are title and actions parts</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Fifth;
