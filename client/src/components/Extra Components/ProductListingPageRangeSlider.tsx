import React, { useState } from 'react'
import Box from '@mui/material/Box';
import Slider from '@mui/material/Slider';

function valuetext(value: number) {
    return `${value}°C`;
  }

const ProductListingPageRangeSlider = () => {
    const [maxPrice, setMaxPrice] = useState(1000)

    return (
        <Box >
          <Slider
            aria-label="Price"
            defaultValue={30}
            getAriaValueText={valuetext}
            valueLabelDisplay="auto"
            step={50}
            marks
            min={0}
            max={1000}
          />
        </Box>
      );
}

export default ProductListingPageRangeSlider