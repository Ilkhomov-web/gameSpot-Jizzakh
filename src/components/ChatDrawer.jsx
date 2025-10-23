'use client';
import React, { useState } from 'react';
import {
  Drawer,
  Box,
  Typography,
  IconButton,
  Divider,
  TextField,
  Button,
  Stack,
} from '@mui/material';
import CloseIcon from '@mui/icons-material/Close';
import SendIcon from '@mui/icons-material/Send';

const ChatDrawer = ({ open, onClose, roomName }) => {
  const [messages, setMessages] = useState([]);
  const [inputValue, setInputValue] = useState('');

  const handleSend = () => {
    if (!inputValue.trim()) return;

    setMessages((prev) => [...prev, { from: 'user', text: inputValue }]);
    setInputValue('');

    setTimeout(() => {
      setMessages((prev) => [...prev, { from: 'admin', text: 'Rahmat! Tez orada bog‘lanamiz 😊' }]);
    }, 1000);
  };

  return (
    <Drawer anchor="left" open={open} onClose={onClose}>
      <Box
        sx={{
          width: { xs: 320, sm: 400 },
          height: '100%',
          display: 'flex',
          flexDirection: 'column',
        }}
      >
        {/* Header */}
        <Box
          sx={{
            display: 'flex',
            justifyContent: 'space-between',
            alignItems: 'center',
            p: 2,
            bgcolor: '#3B0270',
            color: 'white',
          }}
        >
          <Typography variant="h6" fontWeight={600}>
            Chat — {roomName || 'Club'}
          </Typography>
          <IconButton onClick={onClose} sx={{ color: 'white' }}>
            <CloseIcon />
          </IconButton>
        </Box>

        <Divider />

        {/* Chat messages */}
        <Box
          sx={{
            flex: 1,
            p: 2,
            overflowY: 'auto',
            display: 'flex',
            flexDirection: 'column',
            gap: 1.5,
            bgcolor: '#F9FAFB',
          }}
        >
          {messages.map((msg, i) => (
            <Box
              key={i}
              sx={{
                alignSelf: msg.from === 'user' ? 'flex-end' : 'flex-start',
                bgcolor: msg.from === 'user' ? '#3B0270' : 'grey.300',
                color: msg.from === 'user' ? 'white' : 'black',
                p: 1.2,
                borderRadius: 2,
                maxWidth: '80%',
                wordWrap: 'break-word',
              }}
            >
              {msg.text}
            </Box>
          ))}
        </Box>

        <Divider />
        <Stack
          direction="row"
          spacing={1}
          sx={{
            p: 1.5,
            bgcolor: 'white',
            borderTop: '1px solid #eee',
          }}
        >
          <TextField
            fullWidth
            size="small"
            placeholder="Xabar yozing..."
            value={inputValue}
            onChange={(e) => setInputValue(e.target.value)}
            onKeyDown={(e) => e.key === 'Enter' && handleSend()}
          />
          <Button
            variant="contained"
            onClick={handleSend}
            sx={{
              minWidth: '45px',
              borderRadius: 2,
              bgcolor: '#3B0270',
              '&:hover': { bgcolor: '#4F0E90' },
            }}
          >
            <SendIcon />
          </Button>
        </Stack>
      </Box>
    </Drawer>
  );
};

export default ChatDrawer;
