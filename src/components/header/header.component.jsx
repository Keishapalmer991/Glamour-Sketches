// react router
import { Link, NavLink } from "react-router-dom";
// react hooks
import { useState, useEffect } from "react";
// react icons
import { FiMenu } from "react-icons/fi";
import { LiaTimesSolid } from "react-icons/lia";

const Header = () => {
    const baseRoute = '/';
    const [isSticky, setIsSticky] = useState(false);
    const [showNav, setShowNav] = useState(false);

    // Handle scroll event to make header sticky
    useEffect(() => {
        const handleScroll = () => {
            if (window.scrollY > 40) { // Adjust scrollY value as needed
                setIsSticky(true);
            } else {
                setIsSticky(false);
            }
        };

        window.addEventListener('scroll', handleScroll);

        return () => {
            window.removeEventListener('scroll', handleScroll);
        };
    }, []);

    return(
        <header className={`${isSticky ? 'shadow' : 'py-[0.2rem]'} w-full fixed bg-white top-0 left-0 z-[999] transition-all duration-300 ease-in-out`}>
            {/* adjuster */}
            <div className="max-w-[1200px] w-[90%] mx-auto py-[1rem]">
                {/* flex */}
                <div className="flex justify-between items-center">
                    {/* Logo */}
                    <div>
                        <Link to={baseRoute}>
                            <h1 className="text-[3rem] pacifico-regular"><span className="text-[3rem] pacifico-regular font-bold">Glamour</span>Sketches</h1>
                        </Link>
                    </div>
                    {/* desktop nav Links */}
                    <div className='hidden md:flex items-center'>
                        <NavLink className='text-[1.6rem]'>Contact Us</NavLink>
                    </div>
                    {/* Menu icon */}
                    {
                        showNav?
                            <LiaTimesSolid onClick={() => {
                                setShowNav(false)
                            }} className="text-[2.5rem] cursor-pointer relative z-[5] md:hidden text-black" />
                        :
                            <FiMenu onClick={() => {
                                setShowNav(true)
                            }} className="text-[2.5rem] cursor-pointer relative z-[5] md:hidden text-black" />
                    }
                </div>
            </div>
            {/* mobile nav links */}
            <div className={`overflow-hidden top-0 left-0 md:hidden bg-white fixed w-[100vw] transition-all ${showNav? 'h-[100vh]' : 'h-[0]'}`}>
                <div className='flex items-center flex-col mt-[80px] w-full'>
                    <NavLink className='text-[1.6rem]'>Contact Us</NavLink>
                </div>
            </div>
        </header>
    )
}

export default Header;