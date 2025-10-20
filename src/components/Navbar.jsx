import React from 'react'
import { Box, Button, Container, Grid, List, ListItem, Typography } from "@mui/material";
import DarkModeIcon from '@mui/icons-material/DarkMode';
import LightModeIcon from '@mui/icons-material/LightMode';
import GTranslateIcon from '@mui/icons-material/GTranslate';
import { useThemeContext } from '@/context/ThemeContext';



const Navbar = () => {
  const {mode, toggleTheme} = useThemeContext()

  return (
    <Box sx={{ padding: '20px 0px'}}>
      <Container maxWidth="lg">
      <Grid container>
        <Grid item size={{xs: 6, sm: 6, md: 6, lg: 6, xl: 6,}} sx={{display: 'flex', alignItems: 'center', gap: '10px'}} >
            <Box component={"img"} width={"100px"} src={"/logo.png"}></Box>
            <Typography variant='h4' sx={{ color: mode === "dark" ? "white":  "#3B0270" }}>GameSpot Jizzakh </Typography>
        </Grid>
        <Grid item size={{xs: 6, sm: 6, md: 6, lg: 6, xl: 6,}} sx={{display: 'flex', alignItems: 'center', gap: '10px', justifyContent: 'flex-end'}}>
            <List>
                <ListItem sx={{color: mode === "dark" ? "white" : '#3B0270'}}>Kompyur club qo'shish</ListItem>
            </List>
            <Box>
            <Button>
                <GTranslateIcon  sx={{color: mode === "dark" ? "white" : '#3B0270'}} />
            </Button>
            <Button onClick={toggleTheme}>
                <DarkModeIcon sx={{color: mode === "dark" ? "white" : '#3B0270'}} />
            </Button>
            </Box>
        </Grid>
      </Grid>
      </Container>
    </Box>
  )
}

export default Navbar

