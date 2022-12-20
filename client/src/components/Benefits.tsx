import React from 'react'
import HighQualityRoundedIcon from '@mui/icons-material/HighQualityRounded'
import LocalShippingRoundedIcon from '@mui/icons-material/LocalShippingRounded'
import AttachMoneyRoundedIcon from '@mui/icons-material/AttachMoneyRounded'


const Benefits = () => {
  return (
    <section className='w-[80%] mx-auto my-10'>
        <h2 className='text-center font-medium text-2xl my-5'>Benefits Using Our Services</h2>

        <div className="grid gap-4 lg:grid-cols-3 md:grid-cols-2 sm:grid-cols-1">
            <div className="">
                <HighQualityRoundedIcon fontSize='large' />
                <h4 className='text-lg font-medium'>High Quality</h4>
                <p className='text-stone-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sint rem atque quod voluptas ratione totam officia possimus nisi. Debitis!</p>
            </div>

            <div className="">
                <LocalShippingRoundedIcon fontSize='large' />
                <h4 className='text-lg font-medium'>Free Shipping</h4>
                <p className='text-stone-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sint rem atque quod voluptas ratione totam officia possimus nisi. Debitis!</p>
            </div>

            <div className="">
                <AttachMoneyRoundedIcon fontSize='large' />
                <h4 className='text-lg font-medium'>Refund</h4>
                <p className='text-stone-500'>Lorem ipsum dolor sit amet consectetur, adipisicing elit. Eveniet sint rem atque quod voluptas ratione totam officia possimus nisi. Debitis!</p>
            </div>
        </div>
    </section>
  )
}

export default Benefits