import { useState } from 'react';
import { Container } from '@mui/material';
import { motion } from 'framer-motion';
import './App.css';
import flowerSvg from './assets/flower.svg'; // Flower SVG
import CardContentSection from './components/CardContentSection';
import AnimatedFlower from './components/AnimatedFlower';

function App() {
  const [showNote, setShowNote] = useState(false); // State to toggle between main content and note

  return (
    <Container
      maxWidth="lg"
      sx={{
        textAlign: 'center',
        mt: 4,
        position: 'relative',
        backgroundColor: '#fff5f8',
        borderRadius: 4,
        padding: 4,
        boxShadow: '0 4px 10px rgba(0, 0, 0, 0.1)',
        height: { xs: 'auto', md: '100vh' }, // Full height on larger screens, auto on smaller
        display: 'flex',
        flexDirection: 'column', // Stack content vertically on smaller screens
        alignItems: 'center',
        justifyContent: 'center',
        gap: 2, // Add spacing between elements
      }}
    >
      {/* Animated Flowers */}
      <AnimatedFlower position="top-left" />
      <AnimatedFlower position="top-right" />
      <AnimatedFlower position="bottom-left" />
      <AnimatedFlower position="bottom-right" />

      {/* Card Content Section */}
      <CardContentSection showNote={showNote} setShowNote={setShowNote} />
    </Container>
  );
}

export default App;
