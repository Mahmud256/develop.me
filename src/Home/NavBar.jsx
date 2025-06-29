import React from 'react';

const navBar = () => {
    return (
        <div className="navbar shadow-sm">
            <div className="flex-1">
                <a className="btn btn-ghost text-xl">devlop.me</a>
            </div>
            <div className="flex-none">
                <ul className="menu menu-horizontal px-1">
                    <li><a>Home</a></li>
                    <li><a>About</a></li>
                    <li><a>Portfolio</a></li>
                    <li><a>Blog</a></li>
                </ul>
                <button className="btn rounded-full bg-white text-black border-[#e5e5e5]">
                    <svg aria-label="Right arrow icon" width="16" height="16" xmlns="http://www.w3.org/2000/svg" viewBox="0 0 24 24"><path d="M5 12h14M13 6l6 6-6 6" stroke="black" strokeWidth="2" fill="none" strokeLinecap="round" strokeLinejoin="round"/></svg>
                    Start Project
                </button>
            </div>
        </div>
    );
};

export default navBar;