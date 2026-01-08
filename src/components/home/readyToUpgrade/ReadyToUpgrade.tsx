export default function ReadyToUpgrade() {
    return (
        <section className="w-full py-20 bg-[#125aed] relative overflow-hidden">
            <div
                className="absolute inset-0 opacity-10"
                style={{
                    backgroundImage:
                        "radial-gradient(circle at 2px 2px, white 1px, transparent 0)",
                    backgroundSize: "32px 32px",
                }}
            />

            <div className="layout-container flex justify-center w-full px-4 md:px-10 relative z-10">
                <div className="max-w-4xl w-full text-center flex flex-col items-center gap-8">
                    <h2 className="text-white text-3xl md:text-5xl font-black leading-tight tracking-tight">
                        Ready to upgrade your IT strategy?
                    </h2>
                    <p className="text-blue-100 text-lg md:text-xl max-w-2xl">
                        Let's discuss how Dithari Solutions can help your business achieve its
                        full potential with technology.
                    </p>

                    <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
                        <button className="flex items-center justify-center rounded-lg h-14 px-8 bg-white hover:bg-gray-100 text-primary text-lg font-bold shadow-lg transition-all w-full sm:w-auto cursor-pointer">
                            Get a Free Quote
                        </button>
                        <button className="flex items-center justify-center rounded-lg h-14 px-8 bg-transparent border-2 border-white hover:bg-white/10 text-white text-lg font-bold transition-all w-full sm:w-auto cursor-pointer">
                            Contact Sales
                        </button>
                    </div>
                </div>
            </div>
        </section>
    )
}
