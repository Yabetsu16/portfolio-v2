
import './App.css';
import { Box } from '@mui/material';
import { ThemeProvider } from './contexts/ThemeContext';
import Header from './components/Header';
import Footer from './components/Footer';
import Hero from './components/sections/Hero';
import About from './components/sections/About';
import Experience from './components/sections/Experience';
import Skills from './components/sections/Skills';
import Projects from './components/sections/Projects';
import Certificates from './components/sections/Certificates';

function App() {
  return (
    <ThemeProvider>
      <Box
        sx={{
          display: 'flex',
          flexDirection: 'column',
          minHeight: '100vh',
          backgroundColor: 'var(--bg)',
          color: 'var(--text)',
          transition: 'background-color 0.3s ease, color 0.3s ease',
        }}
      >
        <Header />
        <Box sx={{ flex: 1 }}>
          <Hero />
          <About />
          <Experience />
          <Skills />
          <Projects />
          <Certificates />
        </Box>
        <Footer />
      </Box>
    </ThemeProvider>
  );
}

export default App;