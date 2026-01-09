import DnsIcon from '@mui/icons-material/Dns';
import MemoryIcon from '@mui/icons-material/Memory';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import SettingsInputComponentIcon from '@mui/icons-material/SettingsInputComponent';

export default function CoreCompetencies() {
    return (
        <section className="w-full py-8 bg-[#f7f6f8]">
            <div className="max-w-[1280px] mx-auto px-6 pt-2 pb-8 w-full">
                <h2 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight tracking-tight">
                    Our Core Competencies
                </h2>
                <p className="text-gray-500 dark:text-gray-400 mt-2 text-lg">
                    Comprehensive technology services designed for scalability.
                </p>
            </div>
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row gap-12 items-center">
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="inline-flex items-center justify-center size-12 rounded-lg bg-blue-50 text-primary mb-2">
                            <span className="material-symbols-outlined text-2xl">
                                <MemoryIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                            </span>
                        </div>

                        <h3 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">
                            Hardware Solutions
                        </h3>

                        <p className="text-[#616f89] dark:text-gray-400 text-lg leading-relaxed">
                            Custom workstation builds, server rack installation, and procurement services tailored to your
                            performance needs. We handle the physical layer so you can focus on your data.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div className="flex gap-3 items-start p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                                <span className="material-symbols-outlined text-primary mt-1">
                                    <SettingsInputComponentIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                </span>
                                <div>
                                    <h4 className="font-bold text-[#111318] dark:text-white">Custom Builds</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        High-performance workstations.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start p-4 rounded-lg bg-white dark:bg-gray-800 border border-gray-100 dark:border-gray-700 shadow-sm">
                                <span className="material-symbols-outlined text-primary mt-1">
                                    <DnsIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                </span>
                                <div>
                                    <h4 className="font-bold text-[#111318] dark:text-white">Server Racks</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Efficient installation services.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-4 flex items-center text-[#0f45b7] font-bold hover:underline gap-1 group w-fit cursor-pointer">
                            Learn more about Hardware
                            <span className="material-symbols-outlined text-sm transition-transform group-hover:translate-x-1">
                                <ArrowRightAltIcon sx={{fontSize: 30}}/>
                            </span>
                        </button>
                    </div>

                    <div className="flex-1 w-full">
                        <div className="w-full aspect-[4/3] rounded-2xl bg-gray-100 dark:bg-gray-800 overflow-hidden shadow-lg relative group">
                            <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent z-10"></div>
                            <div
                                className="w-full h-full bg-cover bg-center transition-transform duration-700 group-hover:scale-105"
                                style={{
                                    backgroundImage:
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuAojLArJzBNfBQ2jxRrb188qnLYFcsUBKQZwpFtMY-vlbZ3w2WldvTciaHiWwn-_jYpTvNpCJ70vFDUKfkEvWeaQt1Eghp8wNCBsaFs2d7JqhcDwOtuIr7xeh27X8I6nes0i_U2ZP2McP2R_B89NpSgm6ilhAircvxZSu6tC-i9kb2DT3ASh-T2VQD6Dg6GLLm-vpGUt49HY_0FdRlk7ndl9WPvK40eLUzY-bCQBbDrY79n-o7k0sAsBtaKW82LIt2B9XG1BMrh2Rd2')",
                                }}
                            />
                            <div className="absolute bottom-6 left-6 z-20 text-white">
                                <p className="font-bold text-lg">Infrastructure Excellence</p>
                                <p className="text-sm opacity-80">Robust physical foundations.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
