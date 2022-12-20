import React, { useState, useEffect, useCallback } from 'react'
import { useNavigate, useParams } from 'react-router-dom'
import { useDispatch } from 'react-redux'
import { addToCart } from '../../state'
import { Product } from '../../types/models'
import { RatingStar } from "rating-star";
import WestRoundedIcon from '@mui/icons-material/WestRounded';
import { api } from '../../services/api'
import ShoppingCartCheckoutRoundedIcon from '@mui/icons-material/ShoppingCartCheckoutRounded';
import FavoriteRoundedIcon from '@mui/icons-material/FavoriteRounded';
// import ProductItem from '../../components/ProductItem'
import Banner from '../../components/Banner'
import LoadingSpinner from '../../utils/LoadingSpinner'

const ProductDetailPage = () => {
  const [productDetails, setProductDetail] = useState<Product>()
  const [count, setCount] = useState(1)
  const [items, setItems] = useState([])
  const [isLoading, setIsLoading] = useState(false)
  const [color, setColor] = useState(false);

  const navigate = useNavigate()
  const params =  useParams()
  const dispatch = useDispatch()

  const handleProductData = useCallback(() => {
    api().get(`products/${params.id}?populate=image`).then((response) => {
      setProductDetail(response.data.data)
    }).catch((error) => console.log(error))
  }, [params.id])

  
  const handleRelatedProducts = useCallback(() => {
    setIsLoading(true)
    api().get('products?populate=*').then((response) => {
      setItems(response.data.data)
      setIsLoading(false)
    }).catch((error) => console.log(error))
  }, [])
  
  useEffect(() => {
    handleProductData()
    handleRelatedProducts()
  // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleColorChange = () => {
    setColor(!color);
  };

  return (
    <div className='w-full'>
      <div className="ml-2 my-2">
        <button onClick={() => navigate("/shop")} className='bg-[#463233] px-4 py-2 text-white flex items-center gap-2'> <WestRoundedIcon />  <span>Go Back</span> </button>
      </div>

      {!isLoading ? 
      <div className="lg:grid grid-cols-2 justify-between gap-5 max-w-[80%] mx-auto">
        <div className="">
          <img src={`http://localhost:1337${productDetails?.attributes.image.data.attributes.formats.medium.url}`} className="w-full object-cover bg-fixed shadow-md" alt={productDetails?.attributes.title} />
        </div>

        <div className="flex flex-col gap-5">
          <div className="flex items-center justify-start h-fit ">
            <span className='bg-[#e0edf4] px-2 py-0 uppercase w-fit h-fit'> {productDetails?.attributes.category} </span>
            <RatingStar id="123" rating={productDetails?.attributes.ratings} />
          </div>
          {/* <p> {productDetails?.attributes.itemAvailability} </p> */}
          <h2 className='font-bold text-2xl '> {productDetails?.attributes.title} </h2>
          <p className=''> Description: <span className='text-gray-500'>{productDetails?.attributes.longDescription}</span> </p>
          <span className=''>Available color: <span className='uppercase'>{productDetails?.attributes.color}</span></span>
          <p className='text-xl font-bold '>&#162; {productDetails?.attributes.price} </p>
          <span className=''>In stock: <span className='text-lg'>{productDetails?.attributes.stock}</span> </span>
          

          <div className="bg-[#f1f7fa] w-fit px-2 flex gap-3 border-2 border-sky-50 ">
            <button onClick={() => setCount(Math.max(count - 1, 1))} className='hover:scale-150'>-</button>
            <span className='text-gray-800 bg-[#e0edf4] shadow-sm rounded-full w-8 h-8 flex justify-center items-center'> {count} </span>
            <button onClick={() => setCount(count + 1)} className='hover:scale-150'>+</button>
          </div>

          <span className='flex justify-start items-center gap-2'>
            <FavoriteRoundedIcon onClick={handleColorChange} className={`${color ? "text-red-400" : "text-gray-400"} hover:scale-150`} />
            Add to wishlist
          </span>

          <button onClick={() => dispatch(addToCart({ product: { ...productDetails, count } }))} className="bg-[#463233] text-white px-6 py-3 mt-4 w-fit shadow-md hover:bg-black"> <ShoppingCartCheckoutRoundedIcon /> Add to Cart</button>
        </div>
      </div>
      : <LoadingSpinner />}

      <div className="mt-20">
        <Banner />
      </div>
    </div>
  )
}

export default ProductDetailPage