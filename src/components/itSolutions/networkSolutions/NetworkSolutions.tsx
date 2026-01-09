import HubIcon from '@mui/icons-material/Hub';
import VpnLockIcon from '@mui/icons-material/VpnLock';
import SecurityIcon from '@mui/icons-material/Security';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';

export default function NetworkSolutions() {
    return (
        <section className="w-full py-16 bg-white dark:bg-[#151c2b]">
            <div className="max-w-[1280px] mx-auto px-6">
                <div className="flex flex-col lg:flex-row-reverse gap-12 items-center">
                    {/* Text Content */}
                    <div className="flex-1 flex flex-col gap-6">
                        <div className="inline-flex items-center justify-center size-12 rounded-lg bg-blue-50 text-primary mb-2">
                            <span className="material-symbols-outlined text-2xl">
                                <HubIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                            </span>
                        </div>

                        <h3 className="text-[#111318] dark:text-white text-3xl font-bold leading-tight">
                            Network Solutions
                        </h3>

                        <p className="text-[#616f89] dark:text-gray-400 text-lg leading-relaxed">
                            Secure, scalable network architecture design including VPN setup, firewall configuration,
                            and 24/7 monitoring. We ensure your data flows securely and efficiently.
                        </p>

                        <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 mt-4">
                            <div className="flex gap-3 items-start p-4 rounded-lg bg-[#f6f6f8] dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                <span className="material-symbols-outlined text-primary mt-1">
                                    <SecurityIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                </span>
                                <div>
                                    <h4 className="font-bold text-[#111318] dark:text-white">Secure Architecture</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Safe and scalable networks.
                                    </p>
                                </div>
                            </div>

                            <div className="flex gap-3 items-start p-4 rounded-lg bg-[#f6f6f8] dark:bg-gray-800 border border-gray-100 dark:border-gray-700">
                                <span className="material-symbols-outlined text-primary mt-1">
                                    <VpnLockIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                </span>
                                <div>
                                    <h4 className="font-bold text-[#111318] dark:text-white">VPN Setup</h4>
                                    <p className="text-sm text-gray-500 dark:text-gray-400">
                                        Remote access solutions.
                                    </p>
                                </div>
                            </div>
                        </div>

                        <button className="mt-4 flex items-center text-[#0f45b7] font-bold hover:underline gap-1 group w-fit cursor-pointer">
                            Explore Network Services
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
                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuC5pWkO_7SES1C-N-S_qMNbskQyTsKB3kt_PiMMvhTSp4NLuwAIo0muvF-21zsVzt-oiMjQx5ipV7vbb6hdE_M-QvTaK-1O_Z6ITIoICN3sD10fLOFtr7tekND3MSGcyvNy5aDI_R-td6ccwNeHMcoQk8hpZI3eo3EKSnuIrgANlTCCm1-e_Sv23yi5vLVcQ25UgYLkMPYCwyHNOk2VawAPAl4bztrryFD8cTuDeOxxIXbQbUTmKpaPiV-NlZxtzl_l8uKvyqk9zpnJ')",
                                }}
                            />
                            <div className="absolute bottom-6 left-6 z-20 text-white">
                                <p className="font-bold text-lg">Connected &amp; Secure</p>
                                <p className="text-sm opacity-80">Seamless communication channels.</p>
                            </div>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
