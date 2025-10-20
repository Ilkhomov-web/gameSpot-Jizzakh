"use client";
import { useThemeContext } from "@/context/ThemeContext";
import { Button, Container, Typography, Card, CardContent } from "@mui/material";

export default function HomePage() {
  const {mode} = useThemeContext()
  return (
    <Container>
      <Typography sx={{color: mode === "dark" ? "white" : "#3B0270", fontSize: {xs: '12px', lg: '30px'}}}>Premium Clublar </ Typography>
    </Container>
  );
}
