"use client";

import Link from 'next/link';
import CheckIcon from '@mui/icons-material/Check';

export default function Intro() {
    return (
        <>
            {/* Hero Section */}
            <section className="relative w-full py-12 md:py-20 lg:py-24 bg-white dark:bg-[#101622]" >
                <div className="layout-container flex justify-center w-full px-4 md:px-10">
                    <div className="max-w-7xl w-full">
                        <div className="@container">
                            <div className="flex flex-col-reverse gap-10 lg:flex-row lg:items-center">
                                <div className="flex flex-col gap-6 lg:w-1/2 lg:pr-10">
                                    <div className="flex flex-col gap-4 text-left">
                                        <div className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-[#e8eefc] text-primary w-fit">
                                            <span className="text-xs text-[#125aed] font-bold uppercase tracking-wider">
                                                Innovation First
                                            </span>
                                        </div>
                                        <h1 className="text-[#111318] dark:text-white text-4xl font-black leading-tight tracking-[-0.033em] sm:text-5xl lg:text-6xl">
                                            Empowering Business Through{" "}
                                            <span className="text-primary">Innovation</span>
                                        </h1>
                                        <h2 className="text-[#616f89] dark:text-gray-400 text-lg font-normal leading-relaxed max-w-xl">
                                            We provide cutting-edge software and IT solutions tailored to your
                                            growth. Transform your digital landscape with our expert guidance.
                                        </h2>
                                    </div>
                                    <div className="flex flex-wrap gap-4 mt-2">
                                        <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#135bed] hover:bg-[#0f45b7] transition-all text-white text-base font-bold shadow-lg shadow-primary/25">
                                            <span className="truncate">Our Services</span>
                                        </button>
                                            <Link href={"/contact-us"}>
                                        <button className="flex min-w-[120px] cursor-pointer items-center justify-center rounded-lg h-12 px-6 bg-[#f0f2f4] dark:bg-gray-800 dark:text-white hover:bg-gray-200 dark:hover:bg-gray-700 transition-all text-[#111318] text-base font-bold">
                                                <span className="truncate">Contact Us</span>
                                        </button>
                                            </Link>
                                    </div>
                                    {/* Trusted Avatars */}
                                    <div className="flex items-center gap-4 mt-6">
                                        <div className="flex -space-x-3">
                                            <div
                                                className="size-10 rounded-full border-2 border-white dark:border-[#101622] bg-gray-200"
                                                style={{
                                                    backgroundImage:
                                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDbzeeifio_xUeyDgvcUQheF5yAEgzRNgDO8kOf8Hl-ZwxMX00h8gHj1CvRSFZludj2S3KAV7Jh3dSj7UksV22rIXt6pGvh0I5lGUm62WN5TWxkCCgKtCkGlY4Bv1bXgKXZerDPCHWjJu2ywAhlweZ4XebcKHB68PeoiUw7Fos-DWI0fRjCCfxNKm85RhIuuRQ0-W93aB_hu2Uhf7yNWL1nD2LvXNEnfWKDJoVVH5-pm_dXmhXmhILjYxss3i-zH-5ePcVP4jWJi48i')",
                                                    backgroundSize: "cover",
                                                }}
                                            />
                                            <div
                                                className="size-10 rounded-full border-2 border-white dark:border-[#101622] bg-gray-200"
                                                style={{
                                                    backgroundImage:
                                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuDvmTgv5OGr2VCtVoJpN_Bvi47T2q5ZhOq4NfythyBew0M-seTnu8e042qnGxhyfJ-Vki5D__PZZs_w-XrQFgat3pBeRfPUVrJwx2U-IJ4Z6r9nJZrQ5hUQpzIjVTg6pCys-bHKrr9F_Yxdbgw3tQxsWazlFcLN5gGzq0y4tXjCSV3QunDoMlYHYb_okp3xTyeEIh-FcObnWi9HZ3uqOsiPGdxy-3blk6xKLmZUq0et_PSFfWh9letodh0DytNQu9NG-BlVgEC3Oach')",
                                                    backgroundSize: "cover",
                                                }}
                                            />
                                            <div
                                                className="size-10 rounded-full border-2 border-white dark:border-[#101622] bg-gray-200"
                                                style={{
                                                    backgroundImage:
                                                        "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCKShsPWgzjcUFRyBsRKnNglEsGE6EchvNgNryo_1sMJEwi-SNDtqLLOXBGHz1DC6Xoex_yuDwyAsxTWJLLrLt3AJzr_OaOdhepy6DAK7wAiG4G63t3VSlq5wBhDPJRfi77NAN6WEEqvtmcr-q7NYqW1c4SieUQjjzjR1hxm-drGA5VeqRlF5sFqdD7wrSohPKXEuUPqKiGPs5fPyojmiDgWyTC9_J23HU0JHhk-5u3Zl4eLgRJqA51OI5IvruG_iyhgtdZc0QglOs6')",
                                                    backgroundSize: "cover",
                                                }}
                                            />
                                            <div className="size-10 rounded-full border-2 border-white dark:border-[#101622] bg-[#0f45b7] flex items-center justify-center text-white text-xs font-bold">
                                                +2k
                                            </div>
                                        </div>
                                        <p className="text-sm font-medium text-[#616f89] dark:text-gray-400">
                                            Trusted by over 2,000 businesses
                                        </p>
                                    </div>
                                </div>
                                <div className="lg:w-1/2">
                                    <div
                                        className="w-full h-[400px] lg:h-[500px] bg-center bg-no-repeat bg-cover rounded-2xl shadow-2xl relative overflow-hidden group"
                                        data-alt="Modern office space with people working on computers and glass walls"
                                        style={{
                                            backgroundImage:
                                                "url('https://lh3.googleusercontent.com/aida-public/AB6AXuB9qSHhJhmuRPTjHYMWndznYiL0uBjXd7g3V3ng2uQZg4hMlsTW4_lhLXjvnZ968f4T5CiEC1o6Id2-ka5b544NCuIT9QJmYhsyZ0MgX8vCVuJjU-CWTNaIVokWFSGsD7w3RZHaLcLUvUwIbVNB-sJFZBTyZBv7XCWfsGfuHR2LpHshmmeErK0uHkC-0W3cikRkIdcv95CfY3Tid1NKwiZ7IxCGMB1JyoxR9KAM99RGbSYgbWe3AZU9vccJEsml9YbJ3_VaXEo4UFhh')",
                                        }}
                                    >
                                        <div className="absolute inset-0 bg-gradient-to-t from-black/60 to-transparent opacity-60" />
                                        {/* Floating Card */}
                                        <div className="absolute bottom-6 left-6 right-6 p-4 bg-white/95 dark:bg-[#1e293b]/95 backdrop-blur rounded-xl shadow-lg border border-white/20">
                                            <div className="flex items-center justify-between">
                                                <div className="flex flex-col">
                                                    <span className="text-xs text-gray-500 dark:text-gray-400 font-medium uppercase">
                                                        System Status
                                                    </span>
                                                    <span className="text-sm font-bold text-[#111318] dark:text-white">
                                                        All Systems Operational
                                                    </span>
                                                </div>
                                                <div className="flex items-center justify-center size-8 rounded-full bg-green-100 dark:bg-green-900/30 text-green-600 dark:text-green-400">
                                                    <span className="material-symbols-outlined text-lg">
                                                        <CheckIcon />
                                                    </span>
                                                </div>
                                            </div>
                                        </div>
                                    </div>
                                </div>
                            </div>
                        </div>
                    </div>
                </div>
            </section>
        </>
    );
}