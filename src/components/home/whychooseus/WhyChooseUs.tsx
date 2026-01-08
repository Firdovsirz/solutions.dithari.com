import BoltIcon from '@mui/icons-material/Bolt';
import LightbulbIcon from '@mui/icons-material/Lightbulb';
import VerifiedUserIcon from '@mui/icons-material/VerifiedUser';

export default function WhyChooseUs() {
    return (
        <section className="w-full py-16 md:py-24 bg-white dark:bg-[#101622]">
            <div className="layout-container flex justify-center w-full px-4 md:px-10">
                <div className="max-w-7xl w-full">
                    <div className="flex flex-col lg:flex-row gap-12 lg:gap-20 items-center">
                        {/* Image */}
                        <div className="w-full lg:w-1/2">
                            <div className="relative rounded-2xl overflow-hidden aspect-video shadow-2xl">
                                <div
                                    className="w-full h-full bg-cover bg-center"
                                    style={{
                                        backgroundImage:
                                            "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDGUfPSape80qEiHZV-aMKX8EA-9atm4FplWWngh_tOywzH3k-sNHkWTz5D9O5z0A5CMl4OproPyPKj146woCaOAp6rl2KiXYheFO-s2UzZYk6wyNUFYenL1WouuhGCXWNjPsNMrdyFPd4vkR-TCS7REVuPdN-KBueFjzGjB_PaYR_akbqppt2evEoic9zRKY_Z31j64nuBnAN_cf0eDphZlrSU3yfP4Q2pCv2AuxqfWEAMKeTfeGZ-oYDgEGM_12enG3yH74d59REI')",
                                    }}
                                    role="img"
                                    aria-label="Team of developers collaborating around a laptop in a modern office"
                                />
                                <div className="absolute inset-0 bg-primary/20 mix-blend-multiply" />
                            </div>
                        </div>

                        {/* Text Content */}
                        <div className="w-full lg:w-1/2 flex flex-col gap-8">
                            <div className="flex flex-col gap-3">
                                <h2 className="text-primary font-bold tracking-wide uppercase text-sm">
                                    Why Choose Us
                                </h2>
                                <h1 className="text-[#111318] dark:text-white text-3xl md:text-4xl font-black leading-tight">
                                    Partners in your digital transformation journey.
                                </h1>
                                <p className="text-[#616f89] dark:text-gray-400 text-base">
                                    We don't just write code; we build solutions that drive tangible
                                    business results.
                                </p>
                            </div>

                            {/* Features */}
                            <div className="flex flex-col gap-6">
                                {/* Feature 1 */}
                                <div className="flex gap-4">
                                    <div className="mt-1 min-w-10 size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">
                                            <LightbulbIcon sx={{ color: "#0f45b7" }} />
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-[#111318] dark:text-white font-bold text-lg">
                                            Technical Expertise
                                        </h3>
                                        <p className="text-[#616f89] dark:text-gray-400 text-sm">
                                            A team of seasoned veterans with deep knowledge in modern tech
                                            stacks.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 2 */}
                                <div className="flex gap-4">
                                    <div className="mt-1 min-w-10 size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">
                                            <BoltIcon sx={{ color: "#0f45b7" }} />
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-[#111318] dark:text-white font-bold text-lg">
                                            Rapid Deployment
                                        </h3>
                                        <p className="text-[#616f89] dark:text-gray-400 text-sm">
                                            Agile methodologies that ensure we deliver high-quality
                                            solutions with speed.
                                        </p>
                                    </div>
                                </div>

                                {/* Feature 3 */}
                                <div className="flex gap-4">
                                    <div className="mt-1 min-w-10 size-10 rounded-full bg-blue-100 dark:bg-blue-900/30 flex items-center justify-center text-primary">
                                        <span className="material-symbols-outlined">
                                            <VerifiedUserIcon sx={{ color: "#0f45b7" }} />
                                        </span>
                                    </div>
                                    <div className="flex flex-col gap-1">
                                        <h3 className="text-[#111318] dark:text-white font-bold text-lg">
                                            Unwavering Reliability
                                        </h3>
                                        <p className="text-[#616f89] dark:text-gray-400 text-sm">
                                            Systems and support you can count on 24/7, keeping your business
                                            always online.
                                        </p>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
