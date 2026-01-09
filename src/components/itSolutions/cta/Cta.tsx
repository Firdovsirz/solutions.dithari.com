import Link from "next/link";

export default function Cta() {
    return (
        <section className="py-20 px-6 bg-whitew dark:bg-background-dark border-t border-[#f0f2f4] dark:border-[#2a2e37]">
            <div className="max-w-[960px] mx-auto bg-[#0f45b7] rounded-2xl p-10 md:p-16 text-center text-white relative overflow-hidden shadow-xl">
                {/* Background decoration */}
                <div className="absolute top-0 left-0 w-full h-full opacity-10 bg-[radial-gradient(ellipse_at_top_right,_var(--tw-gradient-stops))] from-white via-primary to-transparent"></div>

                <div className="relative z-10 flex flex-col items-center gap-6">
                    <h2 className="text-3xl md:text-4xl font-bold tracking-tight">
                        Ready to upgrade your infrastructure?
                    </h2>

                    <p className="text-blue-100 text-lg max-w-[600px]">
                        Let&apos;s discuss how Dithari Solutions can optimize your technology stack for peak performance.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 mt-4">
                        <Link href={"/contact-us"}>
                        <button className="bg-white text-[#0f45b7] hover:bg-gray-50 font-bold py-3 px-8 rounded-lg transition-colors shadow-lg cursor-pointer">
                            Contact Us Today
                        </button>
                        </Link>
                        <button className="bg-transparent border-2 border-white/30 hover:bg-white/10 text-white font-bold py-3 px-8 rounded-lg transition-colors cursor-pointer">
                            View Case Studies
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
