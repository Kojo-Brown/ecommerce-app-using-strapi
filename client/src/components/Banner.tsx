import React from 'react'
import { useNavigate } from 'react-router-dom'
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';

const Banner = () => {
  const navigate = useNavigate()
  return (
    <div className="p-6 py-12 bg-gradient-to-r from-sky-300 text-gray-900">
	<div className="container mx-auto">
		<div className="flex flex-col lg:flex-row items-center justify-between">
			<h2 className="text-center text-6xl tracking-tighter font-bold">Up to 50% Off</h2>
				{/* <br className="sm:hidden">50% Off</br> */}
			<div className="space-x-2 text-center py-2 lg:py-0">
				<span>Plus free shipping! Use code:</span>
				<span className="font-bold text-lg">MAMBA</span>
			</div>
			<button onClick={() => navigate("/shop")} className="px-3 mt-4 lg:mt-0 py-2 border block bg-gray-50 text-gray-900 border-gray-400 shadow-xl hover:bg-stone-100"><span>Shop Now</span>  <ShoppingCartCheckoutRoundedIcon /></button>
		</div>
	</div>
</div>
  )
}

export default Banner