import React from 'react'
import { Carousel } from 'react-responsive-carousel'
import 'react-responsive-carousel/lib/styles/carousel.min.css'
import NavigateBeforeIcon from '@mui/icons-material/NavigateBefore'
import NavigateNextIcon from '@mui/icons-material/NavigateNext'
import { IconButton } from '@mui/material'
import { carouselData } from '../utils/carousel-data'
import { useNavigate } from 'react-router-dom'

const BestSelling = () => {

    const navigate = useNavigate()

    return (
        <section className='bg-[#463233] min-h-[85vh] w-full py-5'>
            <h2 className='text-4xl font-medium text-white text-center py-10'>Best Selling</h2>

            <Carousel  infiniteLoop={true} showThumbs={false} showIndicators={false} showStatus={false} 
            renderArrowPrev={(clickHandler, hasPrev, label) => (
                <IconButton 
                onClick={clickHandler}
                sx={{
                    position: "absolute",
                    top: "50%",
                    left: "0",
                    color: "white",
                    padding: "5px",
                    zIndex: "10"
                }}
                >
                    <NavigateBeforeIcon sx={{ fontSize: 40 }} />
                </IconButton>
            )}
            renderArrowNext={(clickHandler, hasNext, label) => (
                <IconButton 
                onClick={clickHandler}
                sx={{
                    position: "absolute",
                    top: "50%",
                    right: "0",
                    color: "white",
                    padding: "5px",
                    zIndex: "10"
                }}
                >
                    <NavigateNextIcon sx={{ fontSize: 40 }} />
                </IconButton>
            )}
            >
                {carouselData.map((item, index) => (
                    <div key={index} className="lg:flex items-center sm:flex-wrap">
                        <div className="text-white sm:w-full my-10 lg:w-1/2">
                            <h3 className='my-4 font-bold text-xl px-6'> {item.title} </h3>
                            <p className='px-16'> {item.description} </p>
                            <button onClick={() => navigate("/shop")} className='bg-white text-[#463233] font-medium shadow-lg my-6 flex items-center px-6 py-2 mx-auto hover:bg-gray-100'> 
                                {item.btnText} 
                                <div className="">
                                    <svg className="w-5 h-5 ml-2 -mr-1" fill="currentColor" viewBox="0 0 20 20" xmlns="http://www.w3.org/2000/svg"><path fillRule="evenodd" d="M10.293 3.293a1 1 0 011.414 0l6 6a1 1 0 010 1.414l-6 6a1 1 0 01-1.414-1.414L14.586 11H3a1 1 0 110-2h11.586l-4.293-4.293a1 1 0 010-1.414z" clipRule="evenodd"></path></svg>
                                </div>
                            </button>
                        </div>
                        <div className="sm:w-full lg:w-1/2">
                            <img src={item.image} className='w-full object-cover h-[85vh] bg-fixed' alt="" />
                        </div>
                    </div>
                ))}
            </Carousel>
        </section>
    )
}

export default BestSelling