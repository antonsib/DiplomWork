import React, {useContext, useEffect, useState} from 'react';
import {observer} from "mobx-react-lite";
import {Context} from "../index";
import Slider from "@mui/material/Slider";
import Box from "@mui/material/Box";

const TSlider = observer( () => {
   const marks = [
        {
            value: 100,
            label: '100',
        },
        {
            value: 4000,
            label: '4000',
        },
        {
            value: '8000',
            label: '8000',
        },
    ];
    const valuetext=(value)=> {
        return `${value}`;
    }

    const {product} =useContext(Context)
    const [value, setValue] = useState(70000);
    useEffect(()=>{
        product.setPrice(value)
    },[])

    return (
        <Box sx={{ width: 300 }}>
            <Slider
                aria-label="Always visible"
                defaultValue={8000}
                getAriaValueText={valuetext}
                step={10}
                marks={marks}
                min={100}
                max={8000}
                valueLabelDisplay="on"
                onChange={({ target: { value } }) => {setValue(value);product.setPrice(value)}}
            />
        </Box>
    );
});

export default TSlider;