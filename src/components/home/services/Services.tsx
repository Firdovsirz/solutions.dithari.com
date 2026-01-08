import Icon from '@mui/icons-material/Dns';
import CodeIcon from '@mui/icons-material/Code';
import CloudIcon from '@mui/icons-material/Cloud';
import ShieldIcon from '@mui/icons-material/Shield';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Services() {
    return (
        <section
            className="w-full py-16 md:py-24 bg-[#f7f6f8] dark:bg-[#0b1019]"
            id="services"
        >
            <div className="layout-container flex justify-center w-full px-4 md:px-10">
                <div className="max-w-7xl w-full">
                    <div className="flex flex-col gap-10">
                        {/* Header */}
                        <div className="flex flex-col gap-4 text-center md:text-left max-w-3xl">
                            <h2 className="text-primary font-bold tracking-wide uppercase text-sm text-[#0f45b7]">
                                Our Expertise
                            </h2>
                            <h1 className="text-[#111318] dark:text-white text-3xl md:text-4xl font-black leading-tight tracking-tight">
                                Comprehensive digital solutions designed to elevate your business
                                infrastructure.
                            </h1>
                            <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-relaxed">
                                From custom development to security, we cover all your IT needs.
                            </p>
                        </div>

                        {/* Services Grid */}
                        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-6">
                            {/* Card 1 */}
                            <div className="group flex flex-col gap-4 p-6 rounded-xl border border-[#dbdfe6] dark:border-[#2d3748] bg-white dark:bg-[#151e2c] hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer">
                                <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-[#0f45b7] group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">
                                        <CodeIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#111318] dark:text-white text-lg font-bold">
                                        Custom Software
                                    </h3>
                                    <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed">
                                        Tailored development specifically architected for your unique
                                        business logic and goals.
                                    </p>
                                </div>
                                <a className="mt-auto text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                                    <p className='text-[#0f45b7]'>
                                        Learn more
                                    </p>
                                    <span className="material-symbols-outlined text-sm">
                                        <ArrowRightAltIcon sx={{ color: "#0f45b7" }} />
                                    </span>
                                </a>
                            </div>

                            {/* Card 2 */}
                            <div className="group flex flex-col gap-4 p-6 rounded-xl border border-[#dbdfe6] dark:border-[#2d3748] bg-white dark:bg-[#151e2c] hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer">
                                <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-[#0f45b7] group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">
                                        <Icon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#111318] dark:text-white text-lg font-bold">
                                        IT Infrastructure
                                    </h3>
                                    <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed">
                                        Reliable network management and support to keep your operations running smoothly 24/7.
                                    </p>
                                </div>
                                <a className="mt-auto text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                                    <p className='text-[#0f45b7]'>
                                        Learn more
                                    </p>
                                    <span className="material-symbols-outlined text-sm">
                                        <ArrowRightAltIcon sx={{ color: "#0f45b7" }} />
                                    </span>
                                </a>
                            </div>

                            {/* Card 3 */}
                            <div className="group flex flex-col gap-4 p-6 rounded-xl border border-[#dbdfe6] dark:border-[#2d3748] bg-white dark:bg-[#151e2c] hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer">
                                <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-[#0f45b7] group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">
                                        <CloudIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#111318] dark:text-white text-lg font-bold">
                                        Cloud Solutions
                                    </h3>
                                    <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed">
                                        Scalable and secure cloud environments that grow with your user base and data needs.
                                    </p>
                                </div>
                                <a className="mt-auto text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                                    <p className='text-[#0f45b7]'>
                                        Learn more
                                    </p>
                                    <span className="material-symbols-outlined text-sm">
                                        <ArrowRightAltIcon sx={{ color: "#0f45b7" }} />
                                    </span>
                                </a>
                            </div>

                            {/* Card 4 */}
                            <div className="group flex flex-col gap-4 p-6 rounded-xl border border-[#dbdfe6] dark:border-[#2d3748] bg-white dark:bg-[#151e2c] hover:shadow-xl hover:border-primary/50 transition-all duration-300 cursor-pointer">
                                <div className="size-12 rounded-lg bg-blue-50 dark:bg-blue-900/20 flex items-center justify-center text-primary group-hover:bg-[#0f45b7] group-hover:text-white transition-colors">
                                    <span className="material-symbols-outlined text-3xl">
                                        <ShieldIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                    </span>
                                </div>
                                <div className="flex flex-col gap-2">
                                    <h3 className="text-[#111318] dark:text-white text-lg font-bold">
                                        Cybersecurity
                                    </h3>
                                    <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed">
                                        Advanced protection for your digital assets against evolving threats and vulnerabilities.
                                    </p>
                                </div>
                                <a className="mt-auto text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all" href="#">
                                    <p className='text-[#0f45b7]'>
                                        Learn more
                                    </p>
                                    <span className="material-symbols-outlined text-sm">
                                        <ArrowRightAltIcon sx={{ color: "#0f45b7" }} />
                                    </span>
                                </a>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
