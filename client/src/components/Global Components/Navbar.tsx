import React, { useState } from 'react'
import MenuRoundedIcon from '@mui/icons-material/MenuRounded';
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddShoppingCartRoundedIcon from '@mui/icons-material/AddShoppingCartRounded';
import PersonOutlineRoundedIcon from '@mui/icons-material/PersonOutlineRounded';
import ShoppingBagRoundedIcon from '@mui/icons-material/ShoppingBagRounded';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { setIsCartOpen } from '../../state';
import { Badge } from '@mui/material';

const Navbar = () => {
  const [showNavItems, setShowNavItems] = useState(true)

  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state: { cart: { cart: any } }) => state.cart.cart)

  const handleShowNavItems = () => {
    setShowNavItems(!showNavItems)
  }

  return (
    <nav className='flex justify-between items-center p-2 w-full fixed top-0 left-0 z-50 bg-[#f1f7fa] shadow-sm h-16'>
      <div onClick={() => navigate("/")} className="cursor-pointer"> <h3 className='font-black text-stone-600 flex items-center justify-center'> <ShoppingBagRoundedIcon /> <span>SHOP ULTRA</span> </h3> </div>
      <div className="">
        <ul className='sm:hidden md:hidden lg:flex gap-4'>
          <li onClick={() => navigate("/shop")} className="cursor-pointer">Shop</li>
          <li onClick={() => navigate("/contact")} className="cursor-pointer">Contact</li>
        </ul>
      </div>

      <div className="">
        <div className="sm:hidden lg:flex gap-5">
          <input type="search" name="" id="" className='border border-stone-600 focus:outline-none focus:border-sky-400 px-2 py-1' placeholder='Search' />
          <Badge badgeContent={cart.length} invisible={cart.length === 0} className="">
            <button onClick={() => dispatch(setIsCartOpen())} className='text-stone-600'> <AddShoppingCartRoundedIcon /> </button>
          </Badge>
          <button className='text-stone-600'> <PersonOutlineRoundedIcon /> </button>
        </div>

        {showNavItems && (<button onClick={handleShowNavItems} className="lg:hidden"> <MenuRoundedIcon /> </button>)}

        {!showNavItems && (
          <ul className='flex flex-col items-end gap-2 w-full z-40 absolute top-2 right-4 bg-[#f1f1f1f5] border border-gray-100 p-4 shadow-xl'>
            <li> <button className='text-stone-600' onClick={handleShowNavItems}> <CloseRoundedIcon /> </button> </li>
            <li> <input type="search" name="" id="" className='border border-stone-600 focus:outline-none focus:border-sky-400 px-2 py-1' placeholder='Search' /> </li>
            <li onClick={() => {
              navigate("/shop")
              handleShowNavItems()
            }} className="cursor-pointer">Shop</li>
            <li onClick={() => {
              navigate("/contact")
              handleShowNavItems()
            }} className="cursor-pointer">Contact</li>
            <li> 
              <Badge badgeContent={cart.length} invisible={cart.length === 0} className="">
                <button onClick={() => dispatch(setIsCartOpen())} className='text-stone-600'> <AddShoppingCartRoundedIcon /> </button>
              </Badge> 
            </li>
            <li> <button className='text-stone-600'> <PersonOutlineRoundedIcon /> </button> </li>
          </ul>
        )}
      </div>
    </nav>
  )
}

export default Navbar