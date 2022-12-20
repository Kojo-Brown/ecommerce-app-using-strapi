import React, { useCallback, useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux'
// import { useNavigate } from 'react-router-dom'
import { api } from '../../services/api'
import LoadingSpinner from '../../utils/LoadingSpinner';
import { setProducts } from '../../state';
// import Product from '../../components/ProductItem';
import ProductItem from '../../components/ProductItem';
import Tabs from '@mui/material/Tabs'
import Tab from '@mui/material/Tab'
// import { FormControl, FormControlLabel, FormLabel, Radio, RadioGroup, Slider } from '@mui/material';
// import ProductListingRating from '../../components/Extra Components/ProductListingRating';
// import ProductListingSortBy from '../../components/Extra Components/ProductListingSortBy';
// import ProductListingPageRangeSlider from '../../components/Extra Components/ProductListingPageRangeSlider';

const ProductListingPage = () => {
  const [isLoading, setIsLoading] = useState(false)
  const [value, setValue] = useState("all")

  const products = useSelector((state: any) => state.cart.products)

  // const navigate = useNavigate()
  const dispatch = useDispatch()

  // Fetch all products
  const handleProductsData = useCallback(() => {
    setIsLoading(true)
    api().get('products?populate=*').then((response) => {
      dispatch(setProducts(response.data.data))
      setIsLoading(false)
    }).catch((error) => console.log(error))
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  useEffect(() => {
    handleProductsData()
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [])

  const handleChange = (event: any, newValue: any) => {
    setValue(newValue)
  }

  // Filter products
  const handleTopRatedProducts = products.filter((product: any) => product.attributes.itemAvailability === "topRated")
  const handleNewArrivalProducts = products.filter((product: any) => product.attributes.itemAvailability === "newArrivals")
  const handleHotProducts = products.filter((product: any) => product.attributes.itemAvailability === "hot")
  const handleMenCategory = products.filter((product: any) => product.attributes.category === "men")
  const handleWomenCategory = products.filter((product: any) => product.attributes.category === "women")
  const handleKidsCategory = products.filter((product: any) => product.attributes.category === "kids")
  const handleUnisexCategory = products.filter((product: any) => product.attributes.category === "unisex")


  return (
    <div className="">
      <Tabs
        indicatorColor='primary'
        value={value}
        onChange={handleChange}
        centered
        // TabIndicatorProps={{ sx: { display: isNonMobile ? "block" : "none" } }}
        sx={{
          m: "10px",
          "& .MuiTabs-flexContainer": {
            flexWrap: "wrap"
          }
        }}
      >
        <Tab label="ALL" value="all" />
        <Tab label="NEW ARRIVALS" value="newArrivals" />
        <Tab label="TOP RATED" value="topRated" />
        <Tab label="HOT" value="hot" />
        <Tab label="MEN" value="men" />
        <Tab label="WOMEN" value="women" />
        <Tab label="KIDS" value="kids" />
        <Tab label="UNISEX" value="unisex" />
      </Tabs>

      <div className='product-list-container'>

        <div className="product-left-list">
          {/* <div className="">
            <h2>Filter by Price</h2>
            <div className="">
              <ProductListingPageRangeSlider />
            </div>
          </div>
          <div className="">
            <h2>Sort by</h2>
            <ProductListingSortBy />
          </div>
          <div className="">
            <h2>Rating</h2>
            <ProductListingRating />
          </div> */}

          <div className="border w-[90%] mx-auto mt-4 p-2 shadow-sm">
            <h3 className='text-3xl font-bold'>Get 30% off!</h3>
            <p className='py-2'>Share your referral code and get discount.</p>
            <button className='my-2 bg-sky-300 px-4 py-1'>Share</button>
          </div>
        </div>

        {!isLoading ?
          <div className="product-right-list">
            {value === "all" && products.map((product: any, index: number) => (
              <ProductItem key={index} product={product} />
            ))}
            {value === "newArrivals" && handleNewArrivalProducts.map((product: any, index: number) => (
              <ProductItem key={index} product={product} />
            ))}
            {value === "topRated" && handleTopRatedProducts.map((product: any, index: number) => (
              <ProductItem key={index} product={product} />
            ))}
            {value === "hot" && handleHotProducts.map((product: any, index: number) => (
              <ProductItem key={index} product={product} />
            ))}
            {value === "men" && handleMenCategory.map((product: any, index: number) => (
              <ProductItem key={index} product={product} />
            ))}
            {value === "women" && handleWomenCategory.map((product: any, index: number) => (
              <ProductItem key={index} product={product} />
            ))}
            {value === "kids" && handleKidsCategory.map((product: any, index: number) => (
              <ProductItem key={index} product={product} />
            ))}
            {value === "unisex" && handleUnisexCategory.map((product: any, index: number) => (
              <ProductItem key={index} product={product} />
            ))}
          </div>
          : <LoadingSpinner />}
      </div>
    </div>
  )
}

export default ProductListingPage