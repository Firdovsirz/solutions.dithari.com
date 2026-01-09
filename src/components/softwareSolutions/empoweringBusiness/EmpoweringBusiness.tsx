import React from 'react'

export default function EmpoweringBusiness() {
    return (
        <section className="w-full bg-[#f7f6f8] dark:bg-background-dark">
            <div className="mx-auto max-w-7xl px-4 py-8 md:px-10 lg:px-20 lg:py-12">
                <div className="@container">
                    <div
                        className="relative overflow-hidden rounded-xl bg-cover bg-center bg-no-repeat shadow-xl min-h-[480px] flex flex-col justify-center items-center text-center p-8 gap-6"
                        data-alt="Team working on laptops in a modern office environment with blue lighting"
                        style={{
                            backgroundImage:
                                'linear-gradient(rgba(0, 0, 0, 0.5), rgba(0, 0, 0, 0.7)), url("https://lh3.googleusercontent.com/aida-public/AB6AXuAM7x8jVfK1dr64i0TL2DIO7U5Wuz_sDx-uw21Yww0u8cP90wu-VAuU1-mEqmSooE--u1ntQbd8fbJ8jv7IVbQlAxRMjKYBoi695_AaWQZGM1K9Enw-GSkVpnXXK8fhLOCjlHmnqcI7Vu9h3ezRnxensbZ8sTgVp2TyFc5QfcE4WqT1hKaUsH5_wsb2cPlPMl7FICR5ZArQs_gwu0fQzT70c3JyOKifsDUHs4GC9yayE4ClSWWEcSWXnda7NvZIhB379XLQ7WKHGLXB")',
                        }}
                    >
                        <div className="flex flex-col gap-4 max-w-3xl">
                            <h1 className="text-white text-4xl font-black leading-tight tracking-tight sm:text-5xl md:text-6xl">
                                Empowering Business Through Technology
                            </h1>
                            <h2 className="text-gray-200 text-base font-normal sm:text-lg md:text-xl leading-relaxed max-w-2xl mx-auto">
                                Comprehensive software solutions tailored to streamline your operations
                                and drive growth in the digital age.
                            </h2>
                        </div>
                        <div className="flex flex-col sm:flex-row gap-4 mt-4">
                            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-[#125aed] hover:bg-blue-700 text-white text-base font-bold transition-transform hover:scale-105 shadow-lg cursor-pointer">
                                View All Services
                            </button>
                            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white/10 hover:bg-white/20 backdrop-blur-sm border border-white/30 text-white text-base font-bold transition-all cursor-pointer">
                                Contact Us
                            </button>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
