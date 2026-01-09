import CloudSyncIcon from '@mui/icons-material/CloudSync';
import AllInclusiveIcon from '@mui/icons-material/AllInclusive';
import RocketLaunchIcon from '@mui/icons-material/RocketLaunch';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function Devops() {
    return (
        <section className="w-full py-16 bg-[#f7f6f8]">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="inline-flex items-center justify-center size-12 rounded-lg bg-blue-50 text-primary mb-2">
                            <span className="material-symbols-outlined text-2xl">
                                <AllInclusiveIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                            </span>
                        </div>

                        <h3 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">
                            DevOps &amp; Cloud
                        </h3>

                        <p className="text-[#616f89] dark:text-gray-400 text-lg leading-relaxed">
                            Streamline your development lifecycle with CI/CD pipelines, containerization, and cloud
                            infrastructure management. Accelerate delivery without compromising stability.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div className="flex gap-3 items-start p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                                <span className="material-symbols-outlined text-primary mt-1">
                                    <RocketLaunchIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                </span>
                                <div>
                                    <h4 className="font-bold text-[#111318] dark:text-white">CI/CD Pipelines</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Automated deployment flows.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                                <span className="material-symbols-outlined text-primary mt-1">
                                    <CloudSyncIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                </span>
                                <div>
                                    <h4 className="font-bold text-[#111318] dark:text-white">Cloud Management</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        AWS, Azure &amp; Google Cloud.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-4 flex items-center text-[#0f45b7] font-bold hover:underline gap-1 group w-fit cursor-pointer">
                            Discover DevOps
                            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                                <ArrowRightAltIcon sx={{fontSize: 30}}/>
                            </span>
                        </button>
                    </div>

                    {/* Image */}
                    <div className="flex-1 w-full">
                        <div className="w-full aspect-[4/3] rounded-2xl bg-gray-100 dark:bg-gray-800 overflow-hidden shadow-lg relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuBuaRklADmVY6kHiBlrVmsSubH3grO4DQXosf1YMzPn90_qJfo2plvwdQY7hoEaV6sYT6mEHJAEcHxc3YO-zixD54_seUkmQIr37NtxugfL8UMCXgPt5W0CsmKGe8I_kIBE6FyYqGd_6ls7BbGX0qecuuZHf3rYLggwcpVax_vmMxRtgH_bK_fYQL0n2yJZGZ1pLQ6d0daHM7PEgJk-bFpXx7-TlnoeBBLXJO74N8ddYKBpKQGVN6sDnyvgfr51y5b2skwyl1GDLDyM')",
                                }}
                            />
                            <div className="absolute bottom-6 left-6 z-20 text-white">
                                <p className="font-bold text-lg">Agile &amp; Efficient</p>
                                <p className="text-sm opacity-80">Modern software delivery.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
