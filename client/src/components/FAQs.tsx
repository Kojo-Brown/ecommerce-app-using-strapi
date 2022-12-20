import React from 'react'

const FAQs = () => {
    return (
        <section className="bg-[#f1f7fa] dark:text-[#463233] ">
            <div className="flex flex-col justify-center w-[80%] px-4 py-8 mx-auto md:p-8">
                <h2 className="text-2xl font-semibold sm:text-3xl">Frequently Asked Questions</h2>
                <p className="mt-4 mb-8 dark:text-[#463233] ">We are here and ready to help! See some of our customers most frequently asked questions.</p>
                <div className="space-y-4">
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Do you ship to my country?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#463233] ">Lectus iaculis orci metus vitae ligula dictum per. Nisl per nullam taciti at adipiscing est. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Can I change or cancel my order?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#463233] ">Tincidunt ut hac condimentum rhoncus phasellus nostra. Magna porttitor egestas tincidunt neque vehicula potenti. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">What methods of payment do you take?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#463233] ">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                    </details>
                    <details className="w-full border rounded-lg">
                        <summary className="px-4 py-6 focus:outline-none focus-visible:ring-violet-400">Do you provide discounts on products?</summary>
                        <p className="px-4 py-6 pt-0 ml-4 -mt-4 dark:text-[#463233] ">Justo libero tellus integer tincidunt justo semper consequat venenatis aliquet imperdiet. Ultricies urna proin fusce nulla pretium sodales vel magna et massa euismod vulputate sed. </p>
                    </details>
                </div>
            </div>
        </section>
    )
}

export default FAQs