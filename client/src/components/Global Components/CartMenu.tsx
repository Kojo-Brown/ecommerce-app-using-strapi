import React from 'react'
import { useSelector, useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import CloseRoundedIcon from '@mui/icons-material/CloseRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import DeleteOutlineRoundedIcon from '@mui/icons-material/DeleteOutlineRounded';
import ArrowForwardRoundedIcon from '@mui/icons-material/ArrowForwardRounded';
import ArrowBackRoundedIcon from '@mui/icons-material/ArrowBackRounded';
import { increaseCount, decreaseCount, removeFromCart, setIsCartOpen } from '../../state'
import { Product } from '../../types/models';
import { Tooltip } from '@mui/material';


const CartMenu = () => {
  const navigate = useNavigate()
  const dispatch = useDispatch()
  const cart = useSelector((state: any) => state.cart.cart)
  console.log("🚀 ~ file: CartMenu.tsx:15 ~ CartMenu ~ cart", cart)
  const isCartOpen = useSelector((state: any) => state.cart.isCartOpen)

  const totalPrice = cart.reduce((total: number, product: any) => {
    return total + product?.count * product?.attributes?.price
  }, 0)

  return (
    <div className={`${isCartOpen ? "block" : "hidden"} bg-[#00000077] w-full h-full fixed left-0 top-0 z-50 overflow-auto flex flex-col`}>
        <div className="fixed right-0 bottom-0 h-full bg-white sm:max-w-sm md:w-2/4">
            <div className="p-6 overflow-auto h-full">
                <div className="my-7 flex items-center justify-between">
                    <h2>You have <span className='font-bold text-xl'>{cart.length}</span> {cart.length === 1 ? <span>item</span> : <span>items</span>} in your cart.</h2>
                    <button onClick={() => dispatch(setIsCartOpen())}> <CloseRoundedIcon /> </button>
                </div>

            <div className="">
                {cart.length === 0 ? <button onClick={() => {
                    navigate("/shop")
                    dispatch(setIsCartOpen())
                }} className='bg-sky-300 px-4 py-2 flex justify-center items-center mx-auto my-8 gap-3 hover:bg-sky-200'> <ArrowBackRoundedIcon /> <span>Continue shopping</span> </button> : 
                <div>
                    {/* Render all items by mapping through cart items(products) */}
                    {cart.map((product: any) => (
                        <div key={product.id} className="grid grid-cols-2 mb-5 w-full border p-1">
                            <img src={`http://localhost:1337${product?.attributes?.image?.data?.attributes?.formats?.small?.url}`} className="w-32 h-32 object-cover shadow-sm" alt="" />

                            <div className="">
                            <div className="">
                                <h3 className='text-md font-bold'> {product?.attributes?.title} </h3>
                            </div>
                            <div className="flex justify-between py-2">
                                <div className="bg-[#f1f7fa]">
                                    <button onClick={() => dispatch(decreaseCount({ id: product.id }))}> <RemoveRoundedIcon /> </button>
                                    <span> {product?.count} </span>
                                    <button onClick={() => dispatch(increaseCount({ id: product.id }))}> <AddRoundedIcon /> </button>
                                </div>
                                <button onClick={() => dispatch(removeFromCart({ id: product.id }))} className="text-red-500 bg-red-50"> 
                                    <Tooltip title="Remove" placement="left-start">
                                        <DeleteOutlineRoundedIcon /> 
                                    </Tooltip>
                                </button>
                            </div>
                            <div className="">
                                <p className='font-medium text-lg'> &#162; {product?.attributes?.price}</p>
                            </div>
                            </div>
                        </div>
                    ))}
                </div>
}
            </div>

            <hr />

            <div className="w-full flex flex-col gap-4">
                <h3>Subtotal: <span className='font-bold text-2xl'> &#162; {totalPrice.toFixed(2)}</span> </h3>
                <button onClick={() => {
                    navigate("/checkout")
                    dispatch(setIsCartOpen())
                }} className='bg-stone-800 text-white px-6 py-2 font-bold uppercase flex justify-center items-center gap-3 hover:bg-stone-700'> <span> Checkout </span> <ArrowForwardRoundedIcon /> </button>
            </div>
            </div> 

        </div>

    </div>


  )
}

export default CartMenu