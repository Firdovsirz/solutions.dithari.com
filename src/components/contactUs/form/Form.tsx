import CallIcon from '@mui/icons-material/Call';
import MailIcon from '@mui/icons-material/Mail';
import SendIcon from '@mui/icons-material/Send';
import LocationOnIcon from '@mui/icons-material/LocationOn';
import ExpandMoreIcon from '@mui/icons-material/ExpandMore';
import CalendarMonthIcon from '@mui/icons-material/CalendarMonth';

export default function Form() {
    return (
        <section className="py-5 px-6">
            {/* Header */}
            <div className="mb-12 text-center lg:text-left">
                <h1 className="text-4xl lg:text-5xl font-black tracking-tight text-slate-900 dark:text-white mb-4">
                    Let&apos;s Build Something <span className="text-primary">Great Together</span>
                </h1>
                <p className="text-lg text-slate-600 dark:text-slate-400 max-w-2xl mx-auto lg:mx-0">
                    Have a project in mind? Reach out to our team for a consultation. We help businesses transform
                    through innovative software solutions.
                </p>
            </div>

            <div className="grid grid-cols-1 lg:grid-cols-12 gap-12 items-start">
                {/* Left Column: Contact Info & Map */}
                <div className="lg:col-span-5 flex flex-col gap-8">
                    {/* Info Grid */}
                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
                        {/* Phone */}
                        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="inline-flex items-center justify-center size-12 rounded-lg bg-blue-50 text-primary mb-2 group-hover:bg-[#0f45b7] cursor-pointer">
                                <span className="material-symbols-outlined text-2xl">
                                    <CallIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                </span>
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Phone Support</h3>
                            <a
                                className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
                                href="tel:+15551234567"
                            >
                                +1 (555) 123-4567
                            </a>
                        </div>

                        {/* Email */}
                        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="inline-flex items-center justify-center size-12 rounded-lg bg-blue-50 text-primary mb-2 group-hover:bg-[#0f45b7] cursor-pointer">
                                <span className="material-symbols-outlined text-2xl">
                                    <MailIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                </span>
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Email Us</h3>
                            <a
                                className="text-slate-500 dark:text-slate-400 text-sm hover:text-primary transition-colors"
                                href="mailto:solutions@dithari.com"
                            >
                                solutions@dithari.com
                            </a>
                        </div>

                        {/* Address */}
                        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="inline-flex items-center justify-center size-12 rounded-lg bg-blue-50 text-primary mb-2 group-hover:bg-[#0f45b7] cursor-pointer">
                                <span className="material-symbols-outlined text-2xl">
                                    <LocationOnIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                </span>
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Visit Office</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">
                                123 Tech Park Blvd,
                                <br />
                                Innovation City
                            </p>
                        </div>

                        {/* Hours */}
                        <div className="bg-white dark:bg-slate-800 p-5 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm hover:shadow-md transition-shadow group">
                            <div className="inline-flex items-center justify-center size-12 rounded-lg bg-blue-50 text-primary mb-2 group-hover:bg-[#0f45b7] cursor-pointer">
                                <span className="material-symbols-outlined text-2xl">
                                    <CalendarMonthIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                </span>
                            </div>
                            <h3 className="font-bold text-slate-900 dark:text-white mb-1">Operating Hours</h3>
                            <p className="text-slate-500 dark:text-slate-400 text-sm">
                                Mon - Fri
                                <br />
                                9:00 AM - 6:00 PM
                            </p>
                        </div>
                    </div>

                    {/* Map Card */}
                    <div className="bg-white dark:bg-slate-800 p-2 rounded-xl border border-slate-200 dark:border-slate-700 shadow-sm">
                        <div className="relative w-full h-64 rounded-lg overflow-hidden bg-slate-100 dark:bg-slate-900">
                            <img
                                alt="Aerial view of city streets map concept"
                                className="w-full h-full object-cover opacity-80"
                                src="https://lh3.googleusercontent.com/aida-public/AB6AXuDays5dM5lhKbmNPjGjnT8m47vMbLDjLyqj__V6mhs6aYwAHmrunu93es4oKSlUdG6jYgynBVyZpP2wwf-eTJALqmCKiTA6wFvYIyVM7Ow6V8k9Adxfsztm7lO6tjZiXEYwQw3RYo746viW54A0Qz8OkPSdNlid0NK9qvJZtz9FaceK07knvEcR_bfaV8x57OOdlx0rTzhM274ayaCMXIGCP_1bUtnCZV75elTRYwtGklo_T3c1FN1tzG58VdwJB5QsGNFWm7p75Is7"
                            />

                            <div className="absolute inset-0 flex items-center justify-center pointer-events-none">
                                <div className="bg-white dark:bg-slate-800 p-3 rounded-full shadow-xl animate-bounce">
                                    <span className="material-symbols-outlined text-primary text-3xl">
                                        <LocationOnIcon className="text-[#0f45b7] group-hover:text-white transition-colors" sx={{ fontSize: 30 }} />
                                    </span>
                                </div>
                            </div>

                            <a
                                className="absolute bottom-4 right-4 bg-white dark:bg-slate-800 text-xs font-bold px-3 py-1.5 rounded-lg shadow-lg hover:bg-slate-50 dark:hover:bg-slate-700 transition-colors"
                                href="#"
                            >
                                Open in Maps
                            </a>
                        </div>
                    </div>
                </div>

                {/* Right Column: Contact Form */}
                <div className="lg:col-span-7">
                    <div className="bg-white dark:bg-slate-800 rounded-2xl p-6 md:p-10 border border-slate-200 dark:border-slate-700 shadow-xl shadow-slate-200/50 dark:shadow-none">
                        <h2 className="text-2xl font-bold text-slate-900 dark:text-white mb-6">
                            Send us a message
                        </h2>

                        <form className="space-y-6">
                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Full Name
                                    </span>
                                    <input
                                        className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        placeholder="John Doe"
                                        type="text"
                                    />
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Company Name
                                    </span>
                                    <input
                                        className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        placeholder="Your Company Ltd."
                                        type="text"
                                    />
                                </label>
                            </div>

                            <div className="grid grid-cols-1 md:grid-cols-2 gap-6">
                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Work Email
                                    </span>
                                    <input
                                        className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        placeholder="john@company.com"
                                        type="email"
                                    />
                                </label>

                                <label className="flex flex-col gap-2">
                                    <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                        Phone Number
                                    </span>
                                    <input
                                        className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary transition-all"
                                        placeholder="+1 (555) 000-0000"
                                        type="tel"
                                    />
                                </label>
                            </div>

                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    What service are you interested in?
                                </span>
                                <div className="relative">
                                    <select className="w-full h-12 px-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary appearance-none transition-all">
                                        <option value="">Select a service...</option>
                                        <option value="software">Custom Software Development</option>
                                        <option value="consulting">IT Consulting</option>
                                        <option value="cloud">Cloud Migration</option>
                                        <option value="support">Technical Support</option>
                                        <option value="other">Other</option>
                                    </select>
                                    <div className="absolute inset-y-0 right-0 flex items-center pr-3 pointer-events-none text-slate-500">
                                        <span className="material-symbols-outlined">
                                            <ExpandMoreIcon />
                                        </span>
                                    </div>
                                </div>
                            </label>

                            <label className="flex flex-col gap-2">
                                <span className="text-sm font-medium text-slate-700 dark:text-slate-300">
                                    Project Details
                                </span>
                                <textarea
                                    className="w-full p-4 rounded-lg bg-slate-50 dark:bg-slate-900 border border-slate-200 dark:border-slate-700 text-slate-900 dark:text-white placeholder:text-slate-400 focus:outline-none focus:ring-2 focus:ring-primary/50 focus:border-primary resize-y transition-all"
                                    placeholder="Tell us about your project goals, timeline, and budget..."
                                    rows={4}
                                ></textarea>
                            </label>

                            <div className="pt-2">
                                <button
                                    className="w-full bg-[#135bed] hover:bg-[#0f45b7] text-white font-bold h-12 rounded-lg shadow-lg shadow-primary/25 transition-all transform active:scale-[0.98] flex items-center justify-center gap-2 cursor-pointer"
                                    type="button"
                                >
                                    <span>Send Inquiry</span>
                                    <span className="material-symbols-outlined text-sm">
                                        <SendIcon sx={{color: "white"}}/>
                                    </span>
                                </button>

                                <p className="text-xs text-center text-slate-400 mt-4">
                                    By submitting this form, you agree to our{" "}
                                    <a className="underline hover:text-primary" href="#">
                                        Privacy Policy
                                    </a>
                                    .
                                </p>
                            </div>
                        </form>
                    </div>
                </div>
            </div>
        </section>
    )
}
