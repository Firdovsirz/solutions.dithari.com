import MemoryIcon from '@mui/icons-material/Memory';
import StorageIcon from '@mui/icons-material/Storage';
import SecurityIcon from '@mui/icons-material/Security';
import LanguageIcon from '@mui/icons-material/Language';
import CloudCircleIcon from '@mui/icons-material/CloudCircle';

export default function EmpoweringInfrastructure() {
  return (
    <>
      <section className="relative w-full overflow-hidden bg-background-light dark:bg-background-dark py-5 lg:py-10 bg-[#f7f6f8]">
        <div className="layout-content-container max-w-[1280px] mx-auto px-6 flex flex-col items-center text-center gap-8 mb-[20px]">
          <div className="flex flex-col gap-4 max-w-[800px]">
            <h1 className="text-[#111318] dark:text-white text-4xl md:text-6xl font-black leading-tight tracking-tight">
              Empowering Your <br />
              <span className="text-[#135bed]">
                Business Infrastructure
              </span>
            </h1>
            <p className="text-[#616f89] dark:text-gray-400 text-lg md:text-xl font-normal leading-relaxed max-w-[640px] mx-auto">
              End-to-End IT Solutions for the Modern Enterprise. We build the foundation so you can build the future.
            </p>
          </div>

          <div className="flex flex-col sm:flex-row gap-4 w-full sm:w-auto">
            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-[#135bed] hover:bg-blue-600 text-white text-base font-bold transition-all shadow-lg shadow-primary/20 cursor-pointer">
              Explore Services
            </button>
            <button className="flex items-center justify-center rounded-lg h-12 px-8 bg-white dark:bg-gray-800 border border-[#e5e7eb] dark:border-gray-700 text-[#111318] dark:text-white text-base font-medium hover:bg-gray-50 dark:hover:bg-gray-700 transition-all cursor-pointer">
              Learn More
            </button>
          </div>

          <div className="w-full mt-10 rounded-2xl overflow-hidden shadow-2xl border border-gray-200 dark:border-gray-800 relative aspect-[16/9] md:aspect-[21/9]">
            <div className="absolute inset-0 bg-gradient-to-tr from-primary/20 to-transparent z-10"></div>
            <div
              className="w-full h-full bg-cover bg-center"
              style={{
                backgroundImage:
                  "url('https://lh3.googleusercontent.com/aida-public/AB6AXuCFMQrf29RKIiCAIfamS3letaBro0ZKxbPxaicspbtyB8FPw5usdveIVKnpy7xdrwnEVPt3Bn0CwnBpBPUueBz9cbCerIbjoWknyg-2EAa1FdgawGqoVK59BKDMq2nac0F0rwtSRO5nQrsB2Vm4EqU-iOl4Q-n2Cc6eZBDWrA9450hW5UWxmWEdX3Bcqvz8ZgE1SI-ZcIVTE5i8tnpv8yrQeK5Pven1Kb8iOWqUPrOeYp1aauiEYUK7Q4xb-7FOjjl9T3Rc0RT_Jio9')",
              }}
            />
          </div>
        </div>
        <div className="w-full border-y border-[#f0f2f4] dark:border-[#2a2e37] bg-white dark:bg-background-dark py-8">
          <div className="max-w-[1280px] mx-auto px-6">
            <p className="text-center text-sm font-semibold text-gray-500 uppercase tracking-wider mb-6">
              Trusted by innovative teams
            </p>
            <div className="flex flex-wrap justify-center gap-8 md:gap-16 opacity-60 grayscale hover:grayscale-0 transition-all duration-500">
              <span className="material-symbols-outlined text-4xl">
                <CloudCircleIcon sx={{fontSize: 40}} />
              </span>
              <span className="material-symbols-outlined text-4xl">
                <StorageIcon sx={{fontSize: 40}} />
              </span>
              <span className="material-symbols-outlined text-4xl">
                <SecurityIcon sx={{fontSize: 40}} />
              </span>
              <span className="material-symbols-outlined text-4xl">
                <MemoryIcon sx={{fontSize: 40}} />
              </span>
              <span className="material-symbols-outlined text-4xl">
                <LanguageIcon sx={{fontSize: 40}} />
              </span>
            </div>
          </div>
        </div>
      </section>
    </>
  )
}
