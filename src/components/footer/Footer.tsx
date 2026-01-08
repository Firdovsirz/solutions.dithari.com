import Logo from "@/../public/logo/logo.png";
import Image from "next/image";

export default function Footer() {
    return (
        <footer className="bg-background-light dark:bg-[#0b1019] pt-16 pb-8 border-t border-[#dbdfe6] dark:border-[#1e293b]">
            <div className="layout-container flex justify-center w-full px-4 md:px-10">
                <div className="max-w-7xl w-full flex flex-col gap-12">
                    {/* Top Grid */}
                    <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-10">
                        {/* Brand */}
                        <div className="flex flex-col gap-4">
                            <div className="flex items-center gap-2 text-[#111318] dark:text-white">
                                <div className="flex items-center justify-center size-8 rounded bg-primary text-white">
                                    <Image src={Logo} alt="Dithari Solutions" />
                                </div>
                                <h2 className="text-lg font-bold leading-tight">Dithari Solutions</h2>
                            </div>
                            <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed">
                                Empowering businesses with innovative software and robust IT
                                infrastructure. Your success is our code.
                            </p>
                            <div className="flex gap-4 mt-2">
                                {/* LinkedIn */}
                                <a
                                    className="text-[#616f89] hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                                    href="#"
                                >
                                    <span className="sr-only">LinkedIn</span>
                                    <svg
                                        aria-hidden="true"
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path
                                            clipRule="evenodd"
                                            d="M19 0h-14c-2.761 0-5 2.239-5 5v14c0 2.761 2.239 5 5 5h14c2.762 0 5-2.239 5-5v-14c0-2.761-2.238-5-5-5zm-11 19h-3v-11h3v11zm-1.5-12.268c-.966 0-1.75-.79-1.75-1.764s.784-1.764 1.75-1.764 1.75.79 1.75 1.764-.783 1.764-1.75 1.764zm13.5 12.268h-3v-5.604c0-3.368-4-3.113-4 0v5.604h-3v-11h3v1.765c1.396-2.586 7-2.777 7 2.476v6.759z"
                                            fillRule="evenodd"
                                        ></path>
                                    </svg>
                                </a>
                                {/* Twitter */}
                                <a
                                    className="text-[#616f89] hover:text-primary dark:text-gray-400 dark:hover:text-white transition-colors"
                                    href="#"
                                >
                                    <span className="sr-only">Twitter</span>
                                    <svg
                                        aria-hidden="true"
                                        className="h-6 w-6"
                                        fill="currentColor"
                                        viewBox="0 0 24 24"
                                    >
                                        <path d="M8.29 20.251c7.547 0 11.675-6.253 11.675-11.675 0-.178 0-.355-.012-.53A8.348 8.348 0 0022 5.92a8.19 8.19 0 01-2.357.646 4.118 4.118 0 001.804-2.27 8.224 8.224 0 01-2.605.996 4.107 4.107 0 00-6.993 3.743 11.65 11.65 0 01-8.457-4.287 4.106 4.106 0 001.27 5.477A4.072 4.072 0 012.8 9.713v.052a4.105 4.105 0 003.292 4.022 4.095 4.095 0 01-1.853.07 4.108 4.108 0 003.834 2.85A8.233 8.233 0 012 18.407a11.616 11.616 0 006.29 1.84"></path>
                                    </svg>
                                </a>
                            </div>
                        </div>

                        {/* Services */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#111318] dark:text-white font-bold text-base">Services</h3>
                            <div className="flex flex-col gap-2">
                                <a
                                    className="text-[#616f89] hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm transition-colors"
                                    href="#"
                                >
                                    Custom Software
                                </a>
                                <a
                                    className="text-[#616f89] hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm transition-colors"
                                    href="#"
                                >
                                    IT Consulting
                                </a>
                                <a
                                    className="text-[#616f89] hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm transition-colors"
                                    href="#"
                                >
                                    Cloud Migration
                                </a>
                                <a
                                    className="text-[#616f89] hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm transition-colors"
                                    href="#"
                                >
                                    Cybersecurity Audit
                                </a>
                            </div>
                        </div>

                        {/* Company */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#111318] dark:text-white font-bold text-base">Company</h3>
                            <div className="flex flex-col gap-2">
                                <a
                                    className="text-[#616f89] hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm transition-colors"
                                    href="#"
                                >
                                    About Us
                                </a>
                                <a
                                    className="text-[#616f89] hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm transition-colors"
                                    href="#"
                                >
                                    Careers
                                </a>
                                <a
                                    className="text-[#616f89] hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm transition-colors"
                                    href="#"
                                >
                                    Blog
                                </a>
                                <a
                                    className="text-[#616f89] hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm transition-colors"
                                    href="#"
                                >
                                    Contact
                                </a>
                            </div>
                        </div>

                        {/* Subscribe */}
                        <div className="flex flex-col gap-4">
                            <h3 className="text-[#111318] dark:text-white font-bold text-base">Subscribe</h3>
                            <p className="text-[#616f89] dark:text-gray-400 text-sm">
                                Join our newsletter to stay up to date on features and releases.
                            </p>
                            <div className="flex flex-col gap-2">
                                <input
                                    type="email"
                                    placeholder="Enter your email"
                                    className="h-10 w-full rounded-lg border border-[#dbdfe6] dark:border-[#2d3748] bg-white dark:bg-[#151e2c] px-3 text-sm text-[#111318] dark:text-white placeholder-[#9ca3af] focus:border-primary focus:outline-none focus:ring-1 focus:ring-primary"
                                />
                                <button className="h-10 w-full rounded-lg bg-[#111318] dark:bg-primary text-white text-sm font-bold hover:bg-opacity-90 transition-opacity">
                                    Subscribe
                                </button>
                            </div>
                        </div>
                    </div>

                    {/* Bottom Row */}
                    <div className="flex flex-col md:flex-row justify-between items-center pt-8 border-t border-[#dbdfe6] dark:border-[#1e293b] gap-4">
                        <p className="text-[#616f89] dark:text-gray-500 text-sm">
                            © 2024 Dithari Solutions. All rights reserved.
                        </p>
                        <div className="flex gap-6">
                            <a
                                href="#"
                                className="text-[#616f89] hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm transition-colors"
                            >
                                Privacy Policy
                            </a>
                            <a
                                href="#"
                                className="text-[#616f89] hover:text-primary dark:text-gray-400 dark:hover:text-white text-sm transition-colors"
                            >
                                Terms of Service
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </footer>
    )
}
