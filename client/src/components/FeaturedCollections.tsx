import React from 'react'
import FeaturedItem from './FeaturedItem'

const FeaturedCollections = () => {
    return (
        <div className='w-full bg-[#f1f7fa] relative py-16'>
            <div className="text-center font-medium mb-8 sm:text-2xl md:text-4xl">
                <h2>Featured Collections</h2>
            </div>

            <div className="br-invert bg-[#e0edf4] max-w-6xl w-full mx-auto min-h-[65vh] border-2 shadow-xl p-10 grid gap-6 xl:grid-cols-3 lg:grid-cols-2 md:grid-cols-2 sm:grid-cols-1">
                {/* <FeaturedItem /> */}
                {/* <FeaturedItem />
                <FeaturedItem /> */}
                <div className="border-2 bg-green-300">1</div>
                <div className="bg-blue-300">2</div>
                <div className="bg-stone-300">3</div>
                {/* <div className="bg-red-300">4</div> */}
            </div>
        </div>
    )
}

export default FeaturedCollections