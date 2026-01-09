"use client";

import Link from "next/link";
import Image from "next/image";
import { useState } from "react";
import { usePathname } from "next/navigation";
import DSlogo from "@/../public/logo/logo.png";

export default function Header() {
    const [menuOpen, setMenuOpen] = useState(false);
    const pathname = usePathname();

    const menuItems = [
        { title: "Services", href: "/services" },
        { title: "About Us", href: "/about-us" },
        { title: "Works", href: "/works" },
        { title: "Software Solutions", href: "/software-solutions" },
        { title: "IT Solutions", href: "/it-solutions" },
    ];

    return (
        <header className="border-b border-gray-200 px-4 md:px-8 lg:px-20 bg-white sticky top-0 z-50">
            <nav className="w-full relative">
                {/* Desktop Header */}
                <div className="hidden md:flex items-center justify-between h-[80px] w-full">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center cursor-pointer">
                            <Image src={DSlogo} alt="Dithari Solutions" width={50} height={50} />
                            <h2 className="flex items-center ml-3">
                                <span className="font-extrabold text-[#192a66] text-[22px] md:text-[25px] mr-1">Dithari</span>
                                <span className="text-[#1699dd] font-medium text-[18px] md:text-[20px]">Solutions</span>
                            </h2>
                        </div>
                    </Link>

                    {/* Centered Menu */}
                    <ul className="flex-1 flex items-center justify-center space-x-6 text-[#192a66] font-medium">
                        {menuItems.map((item) => (
                            <li
                                key={item.title}
                                className={`relative text-[16px] font-[600] cursor-pointer after:absolute after:left-0 after:-bottom-1 after:h-[2px] after:transition-all after:duration-300
                                    ${pathname === item.href || pathname.startsWith(item.href + "/")
                                        ? "text-[#1699dd] after:w-full after:bg-[#1699dd]"
                                        : "text-[#192a66] after:w-0 after:bg-[#1699dd] hover:after:w-full hover:text-[#1699dd]"}
                                `}
                            >
                                <Link href={item.href}>{item.title.toUpperCase()}</Link>
                            </li>
                        ))}
                    </ul>

                    {/* Get in Touch Button */}
                    <Link href={"/contact-us"}>
                        <button className="bg-[#135bed] hover:bg-[#0f45b7] text-white rounded-lg px-5 py-2 font-semibold transition-all duration-300 cursor-pointer">
                            Get in touch
                        </button>
                    </Link>
                </div>

                {/* Mobile Header */}
                <div className="flex items-center justify-between md:hidden h-[80px] w-full">
                    {/* Logo */}
                    <Link href="/">
                        <div className="flex items-center cursor-pointer">
                            <Image src={DSlogo} alt="Dithari Solutions" width={50} height={50} />
                            <h2 className="flex items-center ml-3">
                                <span className="font-extrabold text-[#192a66] text-[22px] mr-1">Dithari</span>
                                <span className="text-[#1699dd] font-medium text-[18px]">Solutions</span>
                            </h2>
                        </div>
                    </Link>

                    {/* Burger Button */}
                    <div>
                        <button
                            onClick={() => setMenuOpen(!menuOpen)}
                            className="flex flex-col justify-center items-center w-10 h-10 rounded-md hover:bg-gray-100 transition"
                        >
                            <span className={`block h-[2px] w-6 bg-[#192a66] transition-all duration-300 ${menuOpen ? "rotate-45 translate-y-[6px]" : ""}`} />
                            <span className={`block h-[2px] w-6 bg-[#192a66] my-[5px] transition-all duration-300 ${menuOpen ? "opacity-0" : ""}`} />
                            <span className={`block h-[2px] w-6 bg-[#192a66] transition-all duration-300 ${menuOpen ? "-rotate-45 -translate-y-[6px]" : ""}`} />
                        </button>
                    </div>
                </div>

                {/* Mobile Menu (Below Top Row) */}
                <div className={`md:hidden w-full bg-white border-t border-gray-200 transition-all duration-300 overflow-hidden ${menuOpen ? "max-h-[500px] opacity-100" : "max-h-0 opacity-0"}`}>
                    <ul className="flex flex-col items-center gap-4 py-6 text-[#192a66] font-medium">
                        {menuItems.map((item) => (
                            <li
                                key={item.title}
                                className={`cursor-pointer transition ${
                                    pathname === item.href || pathname.startsWith(item.href + "/")
                                        ? "text-[#1699dd] font-semibold"
                                        : "text-[#192a66] hover:text-[#1699dd]"
                                }`}
                            >
                                <Link href={item.href}>{item.title}</Link>
                            </li>
                        ))}
                        <li>
                            <button className="bg-[#135bed] hover:bg-[#0f45b7] text-white rounded-lg px-5 py-2 font-semibold transition-all duration-300">
                                Get in touch
                            </button>
                        </li>
                    </ul>
                </div>
            </nav>
        </header>
    );
}