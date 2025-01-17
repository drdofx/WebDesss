import React, {useState} from 'react';
import { Link, NavLink } from 'react-router-dom';
import Slide from 'react-reveal/Slide';


export default function Navbar({theme, position}) {

    const [toggleMainMenu, setToggleMainMenu] = useState(false);

    return (
        <header className={[position, "w-full z-40 px-5 font-display"].join(" ")}>
            <div className="container mx-auto py-5">
                <Slide top>
                <div className="flex flex-stretch items-center">
                <div className="w-56 items-center flex">                   
                    <Link to="/" >
                        <img  src="images/content/logo.png" alt="Logo-Himti-Home" />
                    </Link>
                </div>
                <div className="w-full"></div>
                <div className="w-auto md:py-5">
                    <ul className={["fixed inset-0 flex flex-col items-center justify-center md:visible md:flex-row md:relative md:opacity-100 md:flex md:items-center md:mb-1 font-normal",
                        toggleMainMenu ? "opacity-100 z-30 visible bg-blue-800" : "invisible opacity-0"
                    ].join(" ")}>
                        <li className="mx-6 py-6 md:py-0">
                            <NavLink exact to="/" activeClassName="main-nav-active" className={[theme === "white" ? "text-white md:text-white hover:underline" : "text-white md:text-black hover:underline"].join(" ")}>
                                HOME
                            </NavLink>
                        </li>
                        <li className="mx-6 py-6 md:py-0">
                            <NavLink to="/news" activeClassName="main-nav-active" className={[theme === "white" ? "text-white md:text-white hover:underline" : "text-white md:text-black hover:underline"].join(" ")}>
                                NEWS
                            </NavLink>
                        </li>
                        <li className="mx-6 py-6 md:py-0">
                            <NavLink to="/gallery" activeClassName="main-nav-active" className={[theme === "white" ? "text-white md:text-white hover:underline" : "text-white md:text-black hover:underline"].join(" ")}>
                                GALLERY
                            </NavLink>
                        </li>
                        <li className="mx-6 py-6 md:py-0">
                            <NavLink to="/about" activeClassName="main-nav-active" className={[theme === "white" ? "text-white md:text-white hover:underline" : "text-white md:text-black hover:underline"].join(" ")}>
                                ABOUT
                            </NavLink>
                        </li>
                    </ul>
                </div>
                <div className="w-auto">
                    <ul className="flex items-center md:mb-11">
                        <li className="mb-11 block md:hidden">
                            <button className={["flex z-50 items-center justify-center w-8 h-8 text-black focus:outline-none",
                                theme === "white" ? "text-white md:text-white" : "text-black md:text-black",
                                toggleMainMenu ? "fixed top-0 right-0" : "relative"
                            ].join(" ")}
                                onClick={() => setToggleMainMenu((prev) => !prev)}
                            >
                        <svg
                        className="fill-current"
                        width="18"
                        height="17"
                        viewBox="0 0 18 17"
                    >
                        <path
                        d="M15.9773 0.461304H1.04219C0.466585 0.461304 0 0.790267 0 1.19609C0 1.60192 0.466668 1.93088 1.04219 1.93088H15.9773C16.5529 1.93088 17.0195 1.60192 17.0195 1.19609C17.0195 0.790208 16.5529 0.461304 15.9773 0.461304Z"
                        />
                        <path
                        d="M15.9773 7.68802H1.04219C0.466585 7.68802 0 8.01698 0 8.42281C0 8.82864 0.466668 9.1576 1.04219 9.1576H15.9773C16.5529 9.1576 17.0195 8.82864 17.0195 8.42281C17.0195 8.01692 16.5529 7.68802 15.9773 7.68802Z"
                        />
                        <path
                        d="M15.9773 14.9147H1.04219C0.466585 14.9147 0 15.2437 0 15.6495C0 16.0553 0.466668 16.3843 1.04219 16.3843H15.9773C16.5529 16.3843 17.0195 16.0553 17.0195 15.6495C17.0195 15.2436 16.5529 14.9147 15.9773 14.9147Z"
                        />
                        </svg>
                            </button>
                        </li>
                    </ul>
                </div>
                </div>
                </Slide>
            </div>
        </header>
    )
}