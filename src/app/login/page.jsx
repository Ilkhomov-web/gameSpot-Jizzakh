'use client';
import React, { useState } from 'react';
import { account } from '../../appwrite/appwriteConfig';
import { useAuth } from '../../context/AuthContext';
import {
  Box,
  Button,
  Grid,
  TextField,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Fade,
} from '@mui/material';
import { motion } from 'framer-motion';

const LoginPage = () => {
  const { setUser } = useAuth();
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const [name, setName] = useState('');
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  console.log(account);

  const handleAuth = async (e) => {
    e.preventDefault();
    setLoading(true);
    try {
      if (isSignup) {
        await account.create(ID.unique(), email, password, name);
        await account.createEmailSession(email, password);
      } else {
        await account.createEmailSession(email, password);
      }

      const userData = await account.get();
      setUser(userData);
      alert(isSignup ? 'Sign up successful!' : 'Login successful!');
    } catch (err) {
      alert(err.message);
    } finally {
      setLoading(false);
    }
  };

  return (
    <Box
      sx={{
        width: '100%',
        height: '100vh',
        display: 'flex',
        alignItems: 'center',
        justifyContent: 'space-between',
      }}
    >
      <Box
        sx={{
          width: '70%',
          height: '100vh',
          backgroundImage: 'url(/back.jpg)',
          backgroundPosition: 'top',
          backgroundSize: 'cover',
          clipPath: 'polygon(0 0, 100% 0%, 50% 100%, 0% 100%)',
        }}
      >
        .
      </Box>
      <Box
        sx={{
          width: '50%',
          height: '100vh',

          display: 'flex',
          justifyContent: 'left',
          alignItems: 'center',
        }}
      >
        <Fade in timeout={600}>
          <motion.div
            initial={{ x: 80, opacity: 0 }}
            animate={{ x: 0, opacity: 1 }}
            transition={{ duration: 0.5 }}
          >
            <Card
              sx={{
                width: 360,
                borderRadius: '20px',
                boxShadow: '0 8px 24px rgba(0,0,0,0.1)',
                p: 2,
              }}
            >
              <CardContent>
                <Typography variant="h5" fontWeight="bold" align="center" color="#3B0270" mb={2}>
                  {isSignup ? 'Create Account' : 'Welcome Back'}
                </Typography>

                <Box
                  component="form"
                  onSubmit={handleAuth}
                  display="flex"
                  flexDirection="column"
                  gap={2}
                >
                  {isSignup && (
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      value={name}
                      onChange={(e) => setName(e.target.value)}
                      required
                    />
                  )}

                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                    required
                  />

                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                    required
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    sx={{
                      mt: 1,
                      backgroundColor: '#3B0270',
                      '&:hover': { backgroundColor: '#28004f' },
                      py: 1.3,
                    }}
                    disabled={loading}
                  >
                    {loading ? (
                      <CircularProgress size={24} sx={{ color: 'white' }} />
                    ) : isSignup ? (
                      'Sign Up'
                    ) : (
                      'Login'
                    )}
                  </Button>

                  <Typography
                    variant="body2"
                    align="center"
                    sx={{ mt: 1, color: 'text.secondary' }}
                  >
                    {isSignup ? 'Already have an account?' : "Don't have an account?"}{' '}
                    <Button
                      onClick={() => setIsSignup((prev) => !prev)}
                      sx={{
                        color: '#3B0270',
                        textTransform: 'none',
                        fontWeight: 600,
                      }}
                    >
                      {isSignup ? 'Login' : 'Sign up'}
                    </Button>
                  </Typography>
                </Box>
              </CardContent>
            </Card>
          </motion.div>
        </Fade>
      </Box>
    </Box>
  );
};

export default LoginPage;
