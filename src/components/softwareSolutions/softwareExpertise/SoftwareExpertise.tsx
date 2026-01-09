import BadgeIcon from '@mui/icons-material/Badge';
import SchoolIcon from '@mui/icons-material/School';
import LanguageIcon from '@mui/icons-material/Language';
import HandshakeIcon from '@mui/icons-material/Handshake';
import SmartphoneIcon from '@mui/icons-material/Smartphone';
import ArrowRightAltIcon from '@mui/icons-material/ArrowRightAlt';
import PrecisionManufacturingIcon from '@mui/icons-material/PrecisionManufacturing';

export default function SoftwareExpertise() {
    return (
        <section className="w-full flex-1 bg-white dark:bg-[#101622] py-16">
            <div className="mx-auto max-w-7xl px-4 md:px-10 lg:px-20">
                <div className="flex flex-col gap-12">
                    {/* Section Header */}
                    <div className="flex flex-col md:flex-row md:items-end md:justify-between gap-6">
                        <div className="flex flex-col gap-4 max-w-2xl">
                            <h2 className="text-[#111318] dark:text-white text-3xl font-black leading-tight tracking-tight sm:text-4xl">
                                Our Software Expertise
                            </h2>
                            <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-relaxed">
                                Explore our wide range of software development and IT solutions designed to meet diverse
                                business needs with precision and scalability.
                            </p>
                        </div>
                    </div>

                    {/* Cards Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6">
                        {/* Card 1 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2333] p-6 hover:shadow-lg hover:border-primary/50 transition-all duration 250 cursor-pointer">
                            <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary group-hover:bg-[#0f45b7] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">
                                    <LanguageIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 25 }} />
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold">Website Development</h3>
                                <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed">
                                    Custom websites and e-commerce platforms built for performance, SEO, and scalability using modern frameworks.
                                </p>
                            </div>
                            <a className="mt-auto text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all underline" href="#">
                                <p className='text-[#0f45b7]'>
                                    Learn more
                                </p> <span className="material-symbols-outlined !text-[18px]">
                                    <ArrowRightAltIcon className="text-[#0f45b7]" />
                                </span>
                            </a>
                        </div>

                        {/* Card 2 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2333] p-6 hover:shadow-lg hover:border-primary/50 transition-all duration 250 cursor-pointer">
                            <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary group-hover:bg-[#0f45b7] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">
                                    <SmartphoneIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 25 }} />
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold">Application Development</h3>
                                <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed">
                                    Native and cross-platform mobile applications for iOS and Android that deliver seamless user experiences.
                                </p>
                            </div>
                            <a  className="mt-auto text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all underline" href="#">
                                <p className='text-[#0f45b7]'>
                                    Learn more
                                </p>
                                <span className="material-symbols-outlined !text-[18px]">
                                    <ArrowRightAltIcon className="text-[#0f45b7]" />
                                </span>
                            </a>
                        </div>

                        {/* Card 3 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2333] p-6 hover:shadow-lg hover:border-primary/50 transition-all duration 250 cursor-pointer">
                            <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary group-hover:bg-[#0f45b7] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">
                                    <HandshakeIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 25 }} />
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold">CRM Solutions</h3>
                                <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed">
                                    Tailored Customer Relationship Management tools to optimize your sales workflow and improve client retention.
                                </p>
                            </div>
                            <a  className="mt-auto text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all underline" href="#">
                                <p className='text-[#0f45b7]'>
                                    Learn more
                                </p> <span className="material-symbols-outlined !text-[18px]">
                                    <ArrowRightAltIcon className="text-[#0f45b7]" />
                                </span>
                            </a>
                        </div>

                        {/* Card 4 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2333] p-6 hover:shadow-lg hover:border-primary/50 transition-all duration 250 cursor-pointer">
                            <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary group-hover:bg-[#0f45b7] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">
                                    <SchoolIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 25 }} />
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold">LMS Platforms</h3>
                                <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed">
                                    Robust Learning Management Systems designed for corporate training, education institutions, and online courses.
                                </p>
                            </div>
                            <a  className="mt-auto text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all underline" href="#">
                                <p className='text-[#0f45b7]'>
                                    Learn more
                                </p> <span className="material-symbols-outlined !text-[18px]">
                                    <ArrowRightAltIcon className="text-[#0f45b7]" />
                                </span>
                            </a>
                        </div>

                        {/* Card 5 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2333] p-6 hover:shadow-lg hover:border-primary/50 transition-all duration 250 cursor-pointer">
                            <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary group-hover:bg-[#0f45b7] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">
                                    <BadgeIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 25 }} />
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold">HR Software</h3>
                                <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed">
                                    Streamlined human resources and payroll management systems to automate administrative tasks and ensure compliance.
                                </p>
                            </div>
                            <a  className="mt-auto text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all underline" href="#">
                                <p className='text-[#0f45b7]'>
                                    Learn more
                                </p>
                                <span className="material-symbols-outlined !text-[18px]">
                                    <ArrowRightAltIcon className="text-[#0f45b7]" />
                                </span>
                            </a>
                        </div>

                        {/* Card 6 */}
                        <div className="group flex flex-col gap-4 rounded-xl border border-[#dbdfe6] dark:border-gray-700 bg-white dark:bg-[#1a2333] p-6 hover:shadow-lg hover:border-primary/50 transition-all duration 250 cursor-pointer">
                            <div className="size-12 rounded-lg bg-blue-50 flex items-center justify-center text-primary group-hover:bg-[#0f45b7] group-hover:text-white transition-colors">
                                <span className="material-symbols-outlined">
                                    <PrecisionManufacturingIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 25 }} />
                                </span>
                            </div>
                            <div className="flex flex-col gap-2 flex-1">
                                <h3 className="text-[#111318] dark:text-white text-xl font-bold">Robotics &amp; Automation</h3>
                                <p className="text-[#616f89] dark:text-gray-400 text-sm leading-relaxed">
                                    Advanced software integration for industrial robotics, warehouse automation, and IoT hardware control systems.
                                </p>
                            </div>
                            <a  className="mt-auto text-primary font-semibold text-sm flex items-center gap-1 group-hover:gap-2 transition-all underline" href="#">
                                <p className='text-[#0f45b7]'>
                                    Learn more
                                </p> <span className="material-symbols-outlined !text-[18px]">
                                    <ArrowRightAltIcon className="text-[#0f45b7]" />
                                </span>
                            </a>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
