
import Image from "next/image";
import Aztu from "@/../public/collaborators/aztu.png";
import Dithari from "@/../public/collaborators/dithari.svg";
import Buyology from "@/../public/collaborators/buyology.png";

export default function Collaborators() {
    return (
        <section className="w-full py-8 border-y border-[#f0f2f4] dark:border-[#1e293b] bg-white dark:bg-[#101622]">
            <div className="layout-container flex justify-center w-full px-4 md:px-10">
                <div className="max-w-7xl w-full">
                    <p className="text-[#616f89] dark:text-gray-500 text-sm font-semibold text-center mb-6 uppercase tracking-wider">
                        Trusted by Industry Leaders
                    </p>
                    <div className="flex flex-wrap justify-center items-center gap-8 md:gap-16 transition-all duration-500">
                        <div
                            className="h-8 flex items-center gap-2 font-bold text-xl text-gray-500"
                        >
                            <span className="">
                                <Image src={Buyology} alt="Buyology" width={150} height={150} />
                            </span>
                            Buyology
                        </div>
                        <div
                            className="h-8 flex items-center gap-2 font-bold text-xl text-gray-500"
                        >
                            <span className="">
                                <Image src={Dithari} alt="Buyology" width={150} height={150} />
                            </span>
                            Dithari
                        </div>
                        <div
                            className="h-8 flex items-center gap-2 font-bold text-xl text-gray-500"
                        >
                            <span className="">
                                <Image src={Aztu} alt="Buyology" width={50} height={50} />
                            </span>
                            Azerbaijan Technical University
                        </div>
                    </div>
                </div>
            </div>
        </section>
    )
}
