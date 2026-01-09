import ExpandMoreIcon from '@mui/icons-material/ExpandMore';

export default function FAQ() {
    return (
        <section className="mt-24 max-w-4xl mx-auto">
            <div className="text-center mb-10">
                <h2 className="text-3xl font-bold text-slate-900 dark:text-white">
                    Frequently Asked Questions
                </h2>
                <p className="text-slate-500 dark:text-slate-400 mt-2">
                    Common questions about working with Dithari Solutions.
                </p>
            </div>

            <div className="space-y-4">
                <details className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <span>What is your typical response time?</span>
                        <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                            <ExpandMoreIcon />
                        </span>
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400">
                        We aim to respond to all inquiries within 24 hours during regular business days. For urgent
                        support requests, our existing clients have access to a dedicated hotline.
                    </div>
                </details>

                <details className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <span>Do you work with international clients?</span>
                        <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                            <ExpandMoreIcon />
                        </span>
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400">
                        Yes, absolutely! We have successfully delivered projects for clients worldwide. We
                        are accustomed to working across different time zones and using remote collaboration tools.
                    </div>
                </details>

                <details className="group bg-white dark:bg-slate-800 rounded-xl border border-slate-200 dark:border-slate-700 overflow-hidden">
                    <summary className="flex cursor-pointer items-center justify-between p-6 font-medium text-slate-900 dark:text-white hover:bg-slate-50 dark:hover:bg-slate-700/50 transition-colors">
                        <span>Do you offer a free consultation?</span>
                        <span className="material-symbols-outlined transition-transform duration-300 group-open:rotate-180">
                            <ExpandMoreIcon />
                        </span>
                    </summary>
                    <div className="px-6 pb-6 text-slate-600 dark:text-slate-400">
                        Yes, the initial discovery call is completely free. We use this time to understand your needs
                        and determine if we are the right fit for your project.
                    </div>
                </details>
            </div>
        </section>
    )
}
