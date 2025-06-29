import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';


const Sixth = () => {
    return (
        <div className="px-6 py-12">
            {/* Top buttons */}
            <div className="flex mb-10">
                <div className="left-0 -translate-y-1/2 flex items-center">
                    <button className="btn btn-circle bg-black border border-[#e5e5e5] text-white">
                        <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor" className="size-[1.2em]">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M19 9l-7 7-7-7" />
                        </svg>
                    </button>
                    <button className="btn rounded-full bg-black border border-[#e5e5e5] px-6 text-white">
                        Contact
                    </button>
                </div>
            </div>

            {/* Contact Section */}
            <div className="grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side Text */}
                <div className="left-side space-y-6">
                    <h2 className="text-4xl font-bold text-black">Interested in <span className="bg-black text-white px-2">Work</span> together?</h2>
                    <p className="text-gray-700">
                        We start every new client interaction with an in-depth discovery call where we get to know each other.
                    </p>
                    <button className="btn rounded-full bg-white text-black border border-[#e5e5e5] px-5 py-3 flex items-center gap-2 hover:shadow-lg">
                        <svg aria-label="Call icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2">
                            <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 8.63 19.86 19.86 0 0 1 0 2.18 2 2 0 0 1 2.18 0h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92z" />
                        </svg>
                        Schedule a Call
                    </button>
                </div>

                {/* Right Side Form */}
                <div className="right-side">
                    <div className="card bg-black text-white shadow-md w-full max-w-md">
                        <div className="card-body space-y-4">
                            <form className="space-y-4">
                                <div>
                                    <input
                                        type="text"
                                        placeholder="Enter your name"
                                        className="w-full px-4 py-2 bg-black border-b-2 text-white focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <input
                                        type="email"
                                        placeholder="Enter your email"
                                        className="w-full px-4 py-2 bg-black border-b-2 text-white focus:outline-none"
                                    />
                                </div>

                                <div>
                                    <textarea
                                        placeholder="Describe your project"
                                        className="w-full px-4 py-2 bg-black border-b-2 text-white focus:outline-none"
                                    ></textarea>
                                </div>

                                <button
                                    type="submit"
                                    className="btn rounded-full bg-black border border-[#e5e5e5] text-white px-5 py-3 flex items-center gap-2 hover:shadow-lg"
                                >
                                    {/* Send icon */}
                                    <svg xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="white" className="w-5 h-5">
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L11 13" />
                                        <path strokeLinecap="round" strokeLinejoin="round" d="M22 2L15 22L11 13L2 9L22 2Z" />
                                    </svg>
                                    Send
                                </button>

                            </form>

                            <div className="flex items-center mr-8">
                                <div className='flex items-center gap-5'>
                                    <p>@ williamrey</p>
                                    {/* Rotated divider */}
                                    <span className="w-px h-5 bg-gray-400 mx-2" style={{ transform: 'rotate(90deg)' }}></span>
                                    <div className="flex items-center gap-2">
                                        <FaFacebookF />
                                        <FaInstagram />
                                        <FaTwitter />
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
};

export default Sixth;
