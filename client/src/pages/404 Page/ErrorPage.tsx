import React from 'react'
import { useNavigate } from 'react-router-dom'

const ErrorPage = () => {
    const navigate = useNavigate()
    return (
        <section className="flex items-center h-full min-h-screen p-16 bg-[#e0edf4] dark:text-gray-100">
            <div className="container flex flex-col items-center justify-center px-5 mx-auto my-8">
                <div className="max-w-md text-center text-[#463233]">
                    <h2 className="mb-8 font-extrabold text-9xl dark:text-[#463233]">
                        <span className="sr-only">Error</span>404
                    </h2>
                    <p className="text-2xl font-semibold md:text-3xl">Sorry, we couldn't find this page.</p>
                    <p className="mt-4 mb-8 dark:text-gray-400">But dont worry, you can find plenty of other things on our homepage.</p>
                    <button onClick={() => navigate("/")} className="px-8 py-3 font-semibold rounded dark:bg-[#463233] dark:text-white">Back to homepage</button>
                </div>
            </div>
        </section>
    )
}

export default ErrorPage