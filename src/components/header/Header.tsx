"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import DSlogo from "@/../public/logo/logo.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);

    const menuItems = [
        { title: "Services", href: "/services" },
        { title: "About Us", href: "/about-us" },
        { title: "Works", href: "/works" },
    ];

    return (
        <header className="flex items-center h-[80px] border-b border-gray-200 px-4 md:px-8 lg:px-20 bg-white sticky top-0 z-50">
            <nav className="flex items-center justify-between w-full relative">
                {/* Logo */}
                <Link href="/">
                    <div className="flex items-center cursor-pointer">
                        <Image src={DSlogo} alt="Dithari Solutions" width={50} height={50} />
                        <h2 className="flex items-center ml-3">
                            <span className="font-extrabold text-[#192a66] text-[22px] md:text-[25px] mr-1">
                                Dithari
                            </span>
                            <span className="text-[#1699dd] font-medium text-[18px] md:text-[20px]">
                                Solutions
                            </span>
                        </h2>
                    </div>
                </Link>

                {/* Desktop Menu */}
                <div className="hidden md:flex items-center space-x-6 lg:space-x-10">
                    <ul className="flex items-center space-x-6 text-[#192a66] font-medium">
                        {menuItems.map((item) => (
                            <li
                                key={item.title}
                                className="relative text-[18px] font-[500] cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:w-0 after:bg-[#1699dd] after:transition-all after:duration-300 hover:after:w-full hover:text-[#1699dd]"
                            >
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                    </ul>
                    <button className="bg-[#0f45b7] hover:bg-[#0f45b7] text-white rounded-lg px-5 py-2 font-semibold transition-all duration-300 cursor-pointer">
                        Get in touch
                    </button>
                </div>

                {/* Burger Button */}
                <div className="md:hidden">
                    <button
                        onClick={() => setMenuOpen(!menuOpen)}
                        className="flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-gray-100 transition"
                    >
                        <span
                            className={`block h-[2px] w-6 bg-[#192a66] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""
                                }`}
                        />
                        <span
                            className={`block h-[2px] w-6 bg-[#192a66] my-[5px] transition-all duration-300 ${menuOpen ? "opacity-0" : ""
                                }`}
                        />
                        <span
                            className={`block h-[2px] w-6 bg-[#192a66] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""
                                }`}
                        />
                    </button>
                </div>

                {/* Mobile Menu */}
                <div
                    className={`absolute top-[80px] left-0 w-full bg-white border-t border-gray-200 shadow-md md:hidden transition-all duration-300 ${menuOpen ? "opacity-100 translate-y-0" : "opacity-0 -translate-y-2 pointer-events-none"
                        }`}
                >
                    <ul className="flex flex-col items-center gap-4 py-6 text-[#192a66] font-medium">
                        {menuItems.map((item) => (
                            <li key={item.title} className="cursor-pointer hover:text-[#1699dd] transition">
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                        <li>
                            <button className="bg-[#0f45b7] hover:bg-[#0f45b7] text-white rounded-lg px-5 py-2 font-semibold transition-all duration-300">
                                Get in touch
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}