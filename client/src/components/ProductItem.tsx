import React, { useState } from 'react'
import { useDispatch } from 'react-redux'
import { useNavigate } from 'react-router-dom'
import { addToCart, decreaseCount, increaseCount } from '../state'
import RemoveRoundedIcon from '@mui/icons-material/RemoveRounded';
import AddRoundedIcon from '@mui/icons-material/AddRounded';

const ProductItem = ({ product }: any) => {
  const [count, setCount] = useState<any>(1)
  const navigate = useNavigate()
  const dispatch = useDispatch()

  return (
    <div key={product.id} className="flex flex-col justify-between shadow-md p-3 gap-4">
      <img onClick={() => navigate(`/products/${product.id}`)} src={`http://localhost:1337${product.attributes.image.data.attributes.formats.small.url}`} className="h-60 w-full object-cover cursor-pointer" alt={product.attributes.title} />
      <h3 className='font-bold text-lg'> {product.attributes.title} </h3>
      <p className='text-lg'>&#162; {product.attributes.price} </p>

      <div className="flex justify-between">
        <div className="bg-[#f1f7fa] w-fit py-1 px-2">
            <button onClick={() => setCount(Math.max(count - 1, 1))}> <RemoveRoundedIcon /> </button>
            <span> {count} </span>
            <button onClick={() => setCount(count + 1)}> <AddRoundedIcon /> </button>
        </div>

        {/* Add to Cart */}
        <button onClick={() => { dispatch(addToCart({ product: { ...product, count } })) }} className="bg-[#463233] text-white px-4 py-2 hover:bg-[#463233d2]">Add to Cart</button>
      </div>
      {/* <div className="">
        {product.attributes.category.replace(/([A-Z])/g, " $1").replace(/^./, (str: string) => str.toUpperCase())}
      </div> */}

    </div>
  )
}

export default ProductItem