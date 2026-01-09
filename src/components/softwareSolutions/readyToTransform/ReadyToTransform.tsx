export default function ReadyToTransform() {
    return (
        <section className="w-full bg-[#f7f6f8] dark:bg-background-dark py-20">
            <div className="mx-auto max-w-4xl px-4 md:px-10">
                <div className="flex flex-col items-center justify-center gap-8 text-center rounded-2xl bg-white dark:bg-[#1a2333] border border-[#f0f2f4] dark:border-gray-700 p-8 shadow-sm">
                    <div className="flex flex-col gap-4">
                        <h2 className="text-[#111318] dark:text-white text-3xl font-black leading-tight sm:text-4xl">
                            Ready to transform your business?
                        </h2>
                        <p className="text-[#616f89] dark:text-gray-400 text-lg font-normal max-w-2xl mx-auto">
                            Let's build something great together. Our team of experts is ready to discuss your unique
                            needs and provide a custom quote.
                        </p>
                    </div>
                    <button
                        className="flex min-w-[160px] cursor-pointer items-center justify-center overflow-hidden rounded-lg h-12 px-8 bg-[#135bed] hover:bg-blue-700 text-white text-base font-bold transition-all shadow-md"
                    >
                        <span className="truncate">Contact Us</span>
                    </button>
                </div>
            </div>
        </section>
    )
}
