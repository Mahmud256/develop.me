import { FaFacebookF, FaInstagram, FaTwitter } from 'react-icons/fa';

const Seconds = () => {
    return (
        <div
            className="min-h-screen bg-[url('./assets/back.png')] bg-cover bg-center"
        >
            <div className="text p-6">
                <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>
                    Trusted <span className="bg-black text-white px-2">Partner</span> for
                </h1>
                <h1 style={{ fontSize: '4rem', fontWeight: 'bold' }}>
                    Your Website <span className="bg-black text-white px-2">Develop</span>
                </h1>

                <div className="flex mt-10">
                    {/* Vertical Side Section */}
                    <div className="flex flex-col items-center mr-8">
                        <div className='flex'>
                            <p style={{ writingMode: 'vertical-rl', transform: 'rotate(180deg)', fontWeight: 'bold' }}>@ williamrey</p>
                            <div className="flex flex-col items-center mt-4 space-y-4">
                                <FaTwitter style={{ writingMode: 'vertical-rl', transform: 'rotate(-90deg)', fontSize: '24px' }} />
                                <FaInstagram style={{ writingMode: 'vertical-rl', transform: 'rotate(-90deg)', fontSize: '24px' }} />
                                <FaFacebookF style={{ writingMode: 'vertical-rl', transform: 'rotate(-90deg)', fontSize: '24px' }} />
                                <span className="w-px h-7 bg-gray-400 mx-2" style={{ transform: 'rotate(180deg)' }}></span>
                            </div>
                        </div>
                    </div>

                    {/* Text and Button */}
                    <div className="max-w-xl text-left">
                        <p className="text-lg mb-2">Building the world's best marketing websites for over a decade.</p>
                        <p className="text-lg mb-6">Your trusted partner for strategy, design, and dev.</p>

                        <button className="btn rounded-full bg-white text-black border border-[#e5e5e5] px-5 py-3 flex items-center gap-2 hover:shadow-lg">
                            <svg aria-label="Call icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" fill="none" viewBox="0 0 24 24" stroke="black" strokeWidth="2">
                                <path strokeLinecap="round" strokeLinejoin="round" d="M22 16.92v3a2 2 0 0 1-2.18 2 19.86 19.86 0 0 1-8.63-3.07A19.5 19.5 0 0 1 3.07 8.63 19.86 19.86 0 0 1 0 2.18 2 2 0 0 1 2.18 0h3a2 2 0 0 1 2 1.72c.13.81.36 1.6.68 2.35a2 2 0 0 1-.45 2.11l-1.27 1.27a16 16 0 0 0 6.29 6.29l1.27-1.27a2 2 0 0 1 2.11-.45c.75.32 1.54.55 2.35.68A2 2 0 0 1 22 16.92z" />
                            </svg>
                            Schedule a Call
                        </button>
                    </div>
                </div>
            </div>
        </div>

    );
};

export default Seconds;
