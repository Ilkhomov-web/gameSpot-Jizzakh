'use client';
import React, { useState } from 'react';
import {
  Box,
  Button,
  TextField,
  Typography,
  Card,
  CardContent,
  CircularProgress,
  Fade,
} from '@mui/material';
import { motion } from 'framer-motion';
import { auth } from '@/firebase/firebaseConfig';
import {
  signInWithEmailAndPassword,
  createUserWithEmailAndPassword,
  updateProfile,
} from 'firebase/auth';
import { useRouter } from 'next/navigation';

const LoginPage = () => {
  const [isSignup, setIsSignup] = useState(false);
  const [loading, setLoading] = useState(false);
  const [fullName, setFullName] = useState('');
  const [email, setEmail] = useState('');
  const [password, setPassword] = useState('');
  const router = useRouter();

  const handleSubmit = async (e) => {
    e.preventDefault();
    setLoading(true);

    try {
      if (isSignup) {
        const userCredential = await createUserWithEmailAndPassword(auth, email, password);
        await updateProfile(userCredential.user, {
          displayName: fullName,
        });

        alert('Account created successfully!');
        router.push('/');
      } else {
        await signInWithEmailAndPassword(auth, email, password);
        router.push('/');
      }
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
      ></Box>

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
                  onSubmit={handleSubmit}
                  display="flex"
                  flexDirection="column"
                  gap={2}
                >
                  {isSignup && (
                    <TextField
                      label="Full Name"
                      variant="outlined"
                      fullWidth
                      required
                      value={fullName}
                      onChange={(e) => setFullName(e.target.value)}
                    />
                  )}

                  <TextField
                    label="Email"
                    type="email"
                    variant="outlined"
                    fullWidth
                    required
                    value={email}
                    onChange={(e) => setEmail(e.target.value)}
                  />

                  <TextField
                    label="Password"
                    type="password"
                    variant="outlined"
                    fullWidth
                    required
                    value={password}
                    onChange={(e) => setPassword(e.target.value)}
                  />

                  <Button
                    type="submit"
                    fullWidth
                    variant="contained"
                    disabled={loading}
                    sx={{
                      mt: 1,
                      backgroundColor: '#3B0270',
                      '&:hover': { backgroundColor: '#28004f' },
                      py: 1.3,
                    }}
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
