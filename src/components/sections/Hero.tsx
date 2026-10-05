import { Box, Container, Button, Stack, Typography, IconButton } from '@mui/material';
import { motion } from 'framer-motion';
import ArrowDownIcon from '@mui/icons-material/ArrowDownward';
import { portfolioData } from '../../data/portfolio';

export const Hero = () => {
    const handleScroll = () => {
        const aboutSection = document.querySelector('#about');
        if (aboutSection) {
            aboutSection.scrollIntoView({ behavior: 'smooth' });
        }
    };

    return (
        <Box
            component="section"
            id="home"
            sx={{
                minHeight: '100vh',
                display: 'flex',
                alignItems: 'center',
                justifyContent: 'center',
                background: `linear-gradient(135deg, var(--accent-bg) 0%, var(--bg) 100%)`,
                overflow: 'hidden',
            }}
        >
            <Container maxWidth="lg">
                <Stack spacing={4} sx={{ alignItems: 'center', textAlign: 'center' }}>
                    {/* Main Heading */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, ease: 'easeOut' }}
                    >
                        <Typography
                            component="h1"
                            sx={{
                                fontSize: { xs: '36px', sm: '56px', md: '72px' },
                                fontWeight: 700,
                                color: 'var(--text-h)',
                                letterSpacing: '-2px',
                                mb: 2,
                            }}
                        >
                            {portfolioData.personal.name}
                        </Typography>
                    </motion.div>

                    {/* Title */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.1, ease: 'easeOut' }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: '20px', sm: '24px', md: '32px' },
                                color: 'var(--accent)',
                                fontWeight: 600,
                            }}
                        >
                            {portfolioData.personal.title}
                        </Typography>

                        <Typography
                            component="h2"
                            sx={{
                                maxWidth: '800px',
                                mx: 'auto',
                                mt: 2,
                                fontSize: { xs: '24px', sm: '30px', md: '36px' },
                                color: 'var(--text-h)',
                                fontWeight: 700,
                                lineHeight: 1.25,
                                letterSpacing: '-0.5px',
                                textAlign: 'center',
                            }}
                        >
                            {portfolioData.personal.bio}
                        </Typography>
                    </motion.div>

                    {/* Bio */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.2, ease: 'easeOut' }}
                        style={{ maxWidth: '600px', textAlign: 'center' }}
                    >
                        <Typography
                            sx={{
                                fontSize: { xs: '16px', md: '18px' },
                                color: 'var(--text)',
                                lineHeight: 1.6,
                                textAlign: 'center',
                            }}
                        >
                            {portfolioData.about.heroSummary}
                        </Typography>
                    </motion.div>

                    {/* Location */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.3, ease: 'easeOut' }}
                    >
                        <Typography
                            sx={{
                                fontSize: '14px',
                                color: 'var(--text)',
                            }}
                        >
                            📍 {portfolioData.personal.location}
                        </Typography>
                    </motion.div>

                    {/* CTA Button */}
                    <motion.div
                        initial={{ opacity: 0, y: 30 }}
                        animate={{ opacity: 1, y: 0 }}
                        transition={{ duration: 0.8, delay: 0.4, ease: 'easeOut' }}
                    >
                        <Button
                            onClick={handleScroll}
                            variant="contained"
                            sx={{
                                backgroundColor: 'var(--accent)',
                                color: '#fff',
                                padding: '12px 32px',
                                fontSize: '16px',
                                fontWeight: 600,
                                textTransform: 'none',
                                borderRadius: '8px',
                                transition: 'all 0.3s ease',
                                '&:hover': {
                                    backgroundColor: 'var(--accent)',
                                    transform: 'translateY(-2px)',
                                    boxShadow: '0 10px 20px rgba(170, 59, 255, 0.3)',
                                },
                            }}
                        >
                            Explore My Work
                        </Button>
                    </motion.div>

                    {/* Scroll Indicator */}
                    <motion.div
                        initial={{ opacity: 0 }}
                        animate={{ opacity: 1, y: [0, 10, 0] }}
                        transition={{ duration: 2, delay: 1, repeat: Infinity }}
                        style={{ marginTop: '40px' }}
                    >
                        <IconButton
                            onClick={handleScroll}
                            sx={{
                                color: 'var(--accent)',
                                animation: 'bounce 2s infinite',
                            }}
                        >
                            <ArrowDownIcon sx={{ fontSize: '28px' }} />
                        </IconButton>
                    </motion.div>
                </Stack>
            </Container>
        </Box>
    );
};

export default Hero;
