import React from 'react'
import { Box, Typography } from "@mui/material";

const CardClub = (prop) => {
    const {club} = prop
  return (
    <Box sx={{background: '#3B0270', borderRadius: '12px', width: '270px', position: 'relative',  boxShadow: '5px 10px 10px rgba(59, 2, 111, 0.5)'}}>
      <Box component={"img"} width={'100%'} height={'250px'} src={'/logo.png'}></Box>
      {club.premium && (<Typography sx={{
        position: 'absolute', 
        top: '0px', 
        right: '0px', 
        background: 'red', 
        borderTopRightRadius: '12px', 
        padding: '5px 20px', 
        color: 'white',
       
        }}>
            Premium
        </Typography>)}
      <Typography>{club.name}</Typography>
      <Typography>{club.type}</Typography>
      <Typography>{club.price}</Typography>
      <Typography>{club.rating}</Typography>
    </Box>
  )
}

export default CardClub
