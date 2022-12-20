import React from 'react'
import { useNavigate } from 'react-router-dom'
import HeroPhoto from '../assets/hero.png'

const Hero = () => {
	const navigate = useNavigate()
	return (
		<div className=''>
			<section className="bg-[#f1f7fa]">
				<div className="grid max-w-screen-xl px-4 py-8 mx-auto lg:gap-8 xl:gap-4 lg:py-16 lg:grid-cols-12">
					<div className="mr-auto place-self-center lg:col-span-7">
						<p className='mb-5 underline underline-offset-4'>Just Dropped</p>
						<h1 className="text-[#463233] max-w-2xl mb-4 text-4xl font-extrabold tracking-tight leading-none sm:text-3xl md:text-5xl xl:text-6xl ">Feel Authentic Peace</h1>
						<p className="max-w-2xl mb-6 font-light text-gray-700 lg:mb-8 md:text-lg lg:text-xl dark:text-gray-500">"You have expensive taste!" the shopkeeper exclaimed. "Are you sure you don't want to look through our cheaper variants first?"</p>
						<button onClick={() => navigate("/shop")} className="inline-flex items-center justify-center px-8 py-4 mr-3 text-base font-medium text-center text-white border bg-[#463233] shadow-xl hover:bg-stone-800">
							Shop Now
							<svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
						</button>
					</div>
					<div className="bg-[#e0edf4] rounded-tl-[80px] rounded-br-[80px] sm: lg:flex col-span-5 mt-10 place-content-center ">
						<img src={HeroPhoto} loading="lazy" className="w-full" alt="mockup" />
					</div>
				</div>
			</section>
		</div>
	)
}

export default Hero